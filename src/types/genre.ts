import { Genre } from "@prisma/client";

export interface genreSliceType {
  items: Genre[];
  isLoading: boolean;
  isError: Error | null;
}
