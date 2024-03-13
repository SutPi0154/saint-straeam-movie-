// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const { page, pageSize } = req.query;
    console.log("page", page, "Pagesize", pageSize);
    const movies = await prisma.movie.findMany({
      skip: (Number(page) - 1) * Number(pageSize),
      take: Number(pageSize),
    });
    const totalMovies = await prisma.movie.count();
    return res.json({ movies, totalMovies });
  }
  res.status(500).send("Internal server error");
}
