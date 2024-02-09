// User.ts or Types.ts (or any relevant file)
export interface User {
  id: string;
  username: string;
  email: string;
  role?: string; // Add this line to include the 'role' property
}
// AdapterUser.ts or Types.ts (or any relevant file)
export interface AdapterUser {
  id: string;
  username: string;
  email: string;
  role?: string; // Add this line to include the 'role' property
}
