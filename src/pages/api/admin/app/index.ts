// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  if (method === "GET") {
    const admin = req.query;
    if (!admin) {
      return res.status(400).send("Unauthorized.");
    }
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).send("Unauthorized.");
    }
    const user: User = session.user;

    const name = user?.name as string;
    const email = user?.email as string;
    const dbUser = await prisma.user.findUnique({ where: { email } });
    if (!session) return res.status(401).send("Unauthorized.");

    const firstMovie = await prisma.movie.findFirst({
      where: { isArchived: false },
    });

    const genreDb = await prisma.genre.findFirst({ where: { name: "Action" } });

    console.log("moviesAllDb from ");
    if (!firstMovie && !genreDb) {
      const movies = await prisma.movie.createMany({
        data: [
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "The Shawshank Redemption",
            description: `"The Shawshank Redemption" is a cinematic masterpiece directed by Frank Darabont, based on Stephen King's novella. Released in 1994, the film unfolds the gripping tale of Andy Dufresne, a banker wrongly convicted of murder and sentenced to life at Shawshank State Penitentiary. Set against the backdrop of the 1940s and 1950s, the narrative skillfully weaves themes of hope, friendship, and the human spirit's resilience in the face of adversity. Tim Robbins delivers a stellar performance as Dufresne, navigating the harsh prison environment with quiet determination. Morgan Freeman's portrayal of Red, an inmate and narrator, is equally compelling. The film's emotional depth, poignant storytelling, and unexpected twists make it a timeless classic. "The Shawshank Redemption" is celebrated for its unforgettable characters, powerful dialogues, and a triumphant message about the enduring strength of the human soul.`,
            videoUrl: "https://www.youtube.com/watch?v=PLl99DlL6b4",
            imageUrl: "https://shorturl.at/oLN46",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `
          "Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "WALL-E",
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/hzIMT",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
        ],
        skipDuplicates: true, // Skip 'Bobo'
      });
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
      return res.status(200).json({
        movies,
        genres,
      });
    } else {
      const genreAllDB = await prisma.genre.findMany({ where: { name } });
      const moviesAllDb = await prisma.movie.findMany({
        where: { isArchived: false },
      });
      //create genre

      // create MovieGenre
      // const movieGenre = await prisma.movieGenres.create({
      //   data: { genreId: genres.id, movieId: movie.id },
      // });
      console.log(moviesAllDb);
      return res.status(200).json({ movies: moviesAllDb, genres: genreAllDB });
    }
  }
  res.status(500).send("Internal server error");
}
