import { Movie } from "@prisma/client";

export interface MovieSliceType {
  items: Movie[];
  isLoading: boolean;
  isError: Error | null;
}
