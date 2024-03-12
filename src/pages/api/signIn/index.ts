import { db } from "@/utils/db";
import { hash } from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  if (method === "POST") {
    const { email, username, password } = req.body;

    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(409).send("User with this email already exists");
    }

    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return res.status(409).send("User with this username already exists");
    }

    const hashPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: { username, email, password: hashPassword },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return res
      .status(200)
      .json({ user: rest, message: "User created successfully" });
  }

  return res.status(500).send("Something went wrong");
}
