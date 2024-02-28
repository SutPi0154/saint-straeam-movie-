interface Config {
  apiBaseUrl: string;
  googleClientId: string;
  googleClientSecret: string;
  nextSecret: string;
  costumerApiUrl: string;
  adminApiUrl: string;
}

export const config: Config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  nextSecret: process.env.NEXT_AUTH_SECRET || "",
  costumerApiUrl: process.env.NEXT_PUBLIC_COSTUMER_API_BASE_URL || "",
  adminApiUrl: process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL || "",
};
