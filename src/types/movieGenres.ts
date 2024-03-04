import { MovieGenres } from "@prisma/client";
import { BaseOptions } from "./app";

export interface MovieGenresSliceType {
  items: MovieGenres[];
  isLoading: boolean;
  isError: Error | null;
}
