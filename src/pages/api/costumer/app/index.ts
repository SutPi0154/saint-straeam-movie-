// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    const moviesAllDb = await prisma.movie.findMany({
      where: { isArchived: false },
    });
    return res.json({ movies: moviesAllDb });
  }
  if (req.method === "GET") {
  }
  res.status(200).json({ name: "John Doe" });
}
