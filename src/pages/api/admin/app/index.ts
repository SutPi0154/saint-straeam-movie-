// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  if (method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Unauthorized.");
    const user = session.user;
    const name = user?.name as string;
    const email = user?.email as string;
    const dbUser = await prisma.user.findUnique({ where: { email } });
    if (!session) return res.status(401).send("Unauthorized.");
    if (!dbUser) {
      // create new movie
      const movieName = "WALL-E";
      const description = "";
      const videoUrl = "https://www.youtube.com/watch?v=CZ1CATNbXg0";
      const imageUrl = "https://shorturl.at/hzIMT";
      const backgroundImageUrl = "https://shorturl.at/nxBGP";
      const duration = "1h 38m";
      const releaseDate = "2008-06-27";
      const movie = await prisma.movie.create({
        data: {
          title: movieName,
          description,
          videoUrl,
          imageUrl,
          duration,
          releaseDate,
          backgroundImageUrl,
        },
      });
      //create genre
      const Action = "Action";
      const Crime = "Crime";
      const Fantasy = "Fantasy";
      const Drama = "Drama";
      const Horror = "Horror";
      const Comedy = "Comedy";
      const Romance = "Romance";
      const ScienceFiction = "Science Fiction";
      const Sports = "Sports";
      const Thriller = "Thriller";
      const Mystery = "Mystery";
      const War = "War";
      const Western = "Western";
      const genresData = [
        { name: Action },
        { name: Comedy },
        { name: Romance },
        { name: Sports },
        { name: War },
        { name: ScienceFiction },
        { name: Mystery },
        { name: Western },
        { name: Thriller },
        { name: Horror },
        { name: Crime },
        { name: Drama },
        { name: Fantasy },
      ];
      const genres = await prisma.$transaction(
        genresData.map((genre) => prisma.genre.create({ data: genre }))
      );
      //create MovieGenre
      // const
    }
  }
  res.status(500).send("Internal server error");
}
