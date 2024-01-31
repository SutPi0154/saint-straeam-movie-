import { User } from "@prisma/client";
import { BaseOptions } from "./app";

export interface RegisterUserType extends BaseOptions {
  username: string;
  email: string;
  password: string;
}
export interface LoginUserType extends BaseOptions {
  email: string;
  password: string;
}
export default interface UserSlice extends BaseOptions {
  item: User[];
  isLoading: boolean;
  iserror: Error | null;
}
