import { Movie } from "@prisma/client";
import { BaseOptions } from "./app";

export interface MovieSliceType {
  page: number;
  totalPages: number;
  items: Movie[];
  isLoading: boolean;
  isError: Error | null;
}

export interface PaginationType extends BaseOptions {
  page: number;
  pageSize: number;
}
