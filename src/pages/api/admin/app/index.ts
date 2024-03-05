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

    const movies = await prisma.movie.findMany({
      // No filter, retrieve all movies
    });

    const genres = await prisma.genre.findMany({
      // No filter, retrieve all genres
    });

    const movieGenres = await prisma.movieGenres.findMany({
      // No filter, retrieve all movie-genre associations
    });

    if (
      movies.length === 0 &&
      genres.length === 0 &&
      movieGenres.length === 0
    ) {
      const movies = await prisma.movie.createMany({
        data: [
          {
            title: "WALL-E",
            imdb: 3.6,
            description: `"Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl: "https://shorturl.at/lzDOX",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "1h 38m",
            releaseDate: "2008-06-27",
          },
          {
            title: "The Shawshank Redemption",
            imdb: 4.5,
            description: `"The Shawshank Redemption" is a cinematic masterpiece directed by Frank Darabont, based on Stephen King's novella. Released in 1994, the film unfolds the gripping tale of Andy Dufresne, a banker wrongly convicted of murder and sentenced to life at Shawshank State Penitentiary. Set against the backdrop of the 1940s and 1950s, the narrative skillfully weaves themes of hope, friendship, and the human spirit's resilience in the face of adversity. Tim Robbins delivers a stellar performance as Dufresne, navigating the harsh prison environment with quiet determination. Morgan Freeman's portrayal of Red, an inmate and narrator, is equally compelling. The film's emotional depth, poignant storytelling, and unexpected twists make it a timeless classic. "The Shawshank Redemption" is celebrated for its unforgettable characters, powerful dialogues, and a triumphant message about the enduring strength of the human soul.`,
            videoUrl: "https://www.youtube.com/watch?v=PLl99DlL6b4",
            imageUrl: "https://shorturl.at/oLN46",
            backgroundImageUrl: "https://shorturl.at/nxBGP",
            duration: "2h 22m",
            releaseDate: "1994-10-14",
          },
          {
            title: "Titanic",
            imdb: 7.9,
            description:
              "The Titanic, a colossal ocean liner, embarked on its maiden voyage in 1912, touted as an unsinkable marvel. Tragically, it struck an iceberg in the icy waters of the Atlantic, leading to its catastrophic demise. Over 1,500 lives were lost in the chilling night, revealing the vulnerability of human ingenuity against nature's might. The disaster spurred changes in maritime safety regulations and remains an indelible chapter in history. The stories of heroism, love, and loss aboard the Titanic echo through time, immortalizing the vessel's poignant journey and serving as a haunting reminder of the delicate balance between human ambition and the forces of the sea.",
            videoUrl: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
            imageUrl: "https://shorturl.at/abyzF",
            backgroundImageUrl: "https://shorturl.at/qF128",
            duration: "3h 14m",
            releaseDate: "1997-12-19",
          },
          {
            title: "Forrest Gump",
            imdb: 8.8,
            description: `"Forrest Gump," a cinematic masterpiece, chronicles the extraordinary life of a simple yet endearing man with a low IQ, played by Tom Hanks. Set against the backdrop of pivotal historical events from the 1950s to the 1980s, Forrest unwittingly becomes an unwitting witness and participant in American history. His journey is a remarkable tale of love, resilience, and unexpected achievements. From running cross-country to his shrimping business, Forrest's naive sincerity impacts those around him, including his childhood love, Jenny. The film's seamless blend of humor, heartbreak, and social commentary, coupled with Hanks' stellar performance, cements "Forrest Gump" as a timeless and emotionally resonant classic.`,
            videoUrl: "https://www.youtube.com/watch?v=bLvqoHBptjg",
            imageUrl: "https://shorturl.at/bHTVZ",
            backgroundImageUrl: "https://shorturl.at/astyE",
            duration: "2h 22m",
            releaseDate: "2008-06-27",
          },
          {
            title: "Pulp Fiction",
            imdb: 8.9,
            description: `"Pulp Fiction," directed by Quentin Tarantino, is a cinematic masterpiece known for its nonlinear narrative and compelling characters. Released in 1994, the film weaves interconnected stories of crime, redemption, and dark humor. With its iconic dialogue, memorable scenes, and eclectic soundtrack, "Pulp Fiction" redefined the crime genre. The cast, featuring John Travolta, Uma Thurman, Samuel L. Jackson, and Bruce Willis, delivered standout performances. The film's unique structure and Tarantino's signature style captivate audiences, blending violence with wit. "Pulp Fiction" remains a cultural touchstone, celebrated for its bold storytelling and influence on contemporary filmmaking.`,
            videoUrl: "https://www.youtube.com/watch?v=tGpTpVyI_OQ",
            imageUrl:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRz_2nKTNlxhVtzbh29kgL3m2ebLv3TlYyzrbyqBtEUxt6mBuZ-",
            backgroundImageUrl: "https://shorturl.at/BJLU2",
            duration: "2h 34m",
            releaseDate: "1994-10-14",
          },

          {
            title: "Spirited Away",
            imdb: 8.6,
            description: `"Spirited Away," directed by Hayao Miyazaki, is a enchanting animated film that follows the journey of Chihiro, a young girl trapped in a mysterious and magical world. Released in 2001, the Studio Ghibli masterpiece is renowned for its breathtaking animation, imaginative creatures, and emotional depth. As Chihiro navigates a surreal bathhouse ruled by a witch, she encounters strange spirits and forges unexpected alliances. The film explores themes of courage, identity, and the importance of compassion. With its mesmerizing visuals and evocative storytelling, "Spirited Away" has become a beloved classic, captivating audiences worldwide and earning critical acclaim for its artistic brilliance.`,
            videoUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk&t=16s",
            imageUrl: "https://shorturl.at/eCKU8",
            backgroundImageUrl: "https://shorturl.at/mwC89",
            duration: "2h 5m",
            releaseDate: "2001-07-20",
          },

          {
            title: "Blood Diamond",
            imdb: 8,
            description: `"Blood Diamond" is a gripping cinematic odyssey that navigates the tumultuous terrain of war-torn Sierra Leone. The film intricately weaves the lives of three individuals — a fisherman turned mercenary, a Mende fisherman, and a courageous journalist — in their quest for survival, justice, and redemption. Set against the backdrop of the brutal Sierra Leone Civil War, the narrative unfolds with heart-wrenching intensity, exposing the ethical complexities surrounding conflict diamonds. Directed with raw authenticity, the film delves into the human cost of greed and the transformative power of conscience. "Blood Diamond" is a riveting exploration of love, loss, and the pursuit of humanity amidst the chaos of war.`,
            videoUrl: "https://www.youtube.com/watch?v=yknIZsvQjG4",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYZMGivTXoT9Etg0YtKKpHsRCfjFODD5S0Fmn2OSotpUJcj4V",
            backgroundImageUrl:
              "https://m.media-amazon.com/images/S/pv-target-images/46cc42f086c2ce9737b16172e228c62e1d5caced5e5912702f910cb1cfe9b0a4._SX1440_FMwebp_.jpg",
            duration: "2h 23m",
            releaseDate: "2006-12-8",
          },

          {
            title: "Killers of the Flower Moon",
            imdb: 7.7,
            description: `"Killers of the Flower Moon," directed by Martin Scorsese and released in 2023, is a gripping cinematic adaptation of David Grann's true crime book. Set in 1920s Oklahoma, the film unravels the dark conspiracy behind a series of murders targeting the wealthy Osage Indian Nation, whose oil riches attracted greed and corruption. With stellar performances by Leonardo DiCaprio and Robert De Niro, the movie masterfully weaves historical intrigue, suspense, and tragedy. Scorsese's meticulous direction and the film's compelling narrative provide a haunting exploration of a forgotten chapter in American history, shedding light on systemic injustice and the resilience of a community amidst adversity.`,
            videoUrl: "https://www.youtube.com/watch?v=EP34Yoxs3FQ",
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMTdiOTg2YmQtZTdjNi00NGJjLWI2ZTQtYWNkNDUwMDEzOTQxXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_FMjpg_UY3000_.jpg",
            backgroundImageUrl:
              "https://m.media-amazon.com/images/S/pv-target-images/94355673ba3a2366db535cd638e7c7a37c65358579a14c71b0e4df75d834c9a4._SX1440_FMwebp_.jpg",
            duration: "3h 26m",
            releaseDate: "2023-10-20",
          },

          {
            title: "Dune",
            imdb: 8,
            description: `
          "Wall-E," an enchanting Pixar creation, unfolds in a future Earth buried beneath heaps of garbage, abandoned by humanity. The last operational robot, Wall-E, spends his days scavenging and collecting relics. When he crosses paths with EVE, an advanced robot searching for signs of life, their connection sparks a poignant journey across the galaxy. The film beautifully explores themes of love, friendship, and environmental stewardship amidst the remnants of a desolate world. With minimal dialogue, Pixar crafts a visually stunning narrative, emphasizing the profound impact of human actions on the planet. "Wall-E" resonates with audiences of all ages, blending humor, emotion, and a compelling social commentary, making it a timeless cinematic gem.`,
            videoUrl: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY2552_.jpg",
            backgroundImageUrl:
              "https://m.media-amazon.com/images/S/pv-target-images/3e6707e7bdc406ff0e1b61ec3d1cb307a1bdc257472a5032f8e6d2a77ff97383._SX1920_FMwebp_.jpg",
            duration: "2h 35m",
            releaseDate: "2021-10-22",
          },
          {
            title: "Fury",
            imdb: 7.6,
            description: `"Fury," a war film directed by David Ayer, immerses viewers in the intense, visceral landscape of World War II. Released in 2014, the movie follows a battle-hardened tank crew, led by Sergeant Don "Wardaddy" Collier (played by Brad Pitt), as they navigate the brutal European theater in April 1945. The film captures the camaraderie, tension, and moral complexities within the tank, christened "Fury." With gripping authenticity, "Fury" explores the psychological toll of war, showcasing both the harrowing combat on the front lines and the profound connections forged among the crew. Pitt's compelling performance and Ayer's gritty direction contribute to a riveting and emotional war drama.`,
            videoUrl: "https://www.youtube.com/watch?v=q94n3eWOWXM",
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_FMjpg_UY2048_.jpg",
            backgroundImageUrl:
              "https://m.media-amazon.com/images/S/pv-target-images/57748d9d3f9c3bbe7eff5f3a0c23c65a8e31d88d635aa55836b008ed98ed6d1a._SX1920_FMwebp_.jpg",
            duration: "2h 14m",
            releaseDate: "2014-10-15",
          },
        ],
      });
      const moviesAllDb = await prisma.movie.findMany({});
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
      const Adventure = "Adventure";
      const Animation = "Animation";
      const genresData = [
        { name: Action },
        { name: Adventure },
        { name: Animation },
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
      const movieGenresData = [
        //1. wall e
        { movieId: moviesAllDb[0].id, genreId: genres[1].id },
        { movieId: moviesAllDb[0].id, genreId: genres[7].id },
        { movieId: moviesAllDb[0].id, genreId: genres[2].id },
        //2. The Shawshank Redemption
        { movieId: moviesAllDb[1].id, genreId: genres[10].id },
        { movieId: moviesAllDb[1].id, genreId: genres[12].id },
        //3. Titanic
        { movieId: moviesAllDb[2].id, genreId: genres[1].id },
        { movieId: moviesAllDb[2].id, genreId: genres[5].id },
        //4. Forrest Gump
        { movieId: moviesAllDb[3].id, genreId: genres[3].id },
        { movieId: moviesAllDb[3].id, genreId: genres[10].id },
        //5. Pulp Fiction()
        { movieId: moviesAllDb[4].id, genreId: genres[10].id },
        { movieId: moviesAllDb[4].id, genreId: genres[12].id },
        //6. Spirited Away (adventure,)
        { movieId: moviesAllDb[5].id, genreId: genres[14].id },
        { movieId: moviesAllDb[5].id, genreId: genres[1].id },
        // 7 blood diamond (crime,thriller)
        { movieId: moviesAllDb[6].id, genreId: genres[1].id },
        { movieId: moviesAllDb[6].id, genreId: genres[10].id },
        //8 killer of the flower moon (crime,western)
        { movieId: moviesAllDb[7].id, genreId: genres[12].id },
        { movieId: moviesAllDb[7].id, genreId: genres[9].id },
        //9 Dune (sci-fi,adventure)
        { movieId: moviesAllDb[8].id, genreId: genres[6].id },
        { movieId: moviesAllDb[8].id, genreId: genres[0].id },
        //10 fury ()
        { movieId: moviesAllDb[9].id, genreId: genres[0].id },
        { movieId: moviesAllDb[9].id, genreId: genres[6].id },
        // Add other associations as needed
      ];
      await prisma.movieGenres.createMany({
        data: movieGenresData,
      });
      const movieGenres = await prisma.movieGenres.findMany({});
      return res.status(200).json({
        movies: moviesAllDb,
        genres,
        movieGenres: movieGenres,
      });
    } else {
      const genreAllDB = await prisma.genre.findMany({});
      const moviesAllDb = await prisma.movie.findMany({});
      const moviesGenre = await prisma.movieGenres.findMany({});

      return res.status(200).json({
        movies: moviesAllDb,
        genres: genreAllDB,
        movieGenres: moviesGenre,
      });
    }
  }
  res.status(500).send("Internal server error");
}
