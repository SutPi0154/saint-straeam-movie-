export default interface User {
  id: number;
  name: string;
  image: string | null;
  email: string | null;
  emailVerified: Date | null;
  hashedPassword: string | null;
  createdAt: Date;
  updatedAt: Date;
}
