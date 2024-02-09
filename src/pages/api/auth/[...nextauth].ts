// import { config } from "@/utils/config";
// import { db } from "@/utils/db";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { compare } from "bcrypt";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(db),
//   secret: config.nextSecret,
//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "johndoe@gmail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           return null;
//         }
//         const existingUser = await db.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!existingUser) {
//           return null; // Add the return statement here
//         }
//         const passwordMatch = await compare(
//           credentials.password,
//           existingUser.password
//         );
//         if (!passwordMatch) {
//           return null;
//         }
//         if (
//           credentials.email === "nawram@gmail.com" &&
//           credentials.password === "nawram123"
//         ) {
//           return {
//             id: existingUser.id,
//             username: existingUser.username,
//             email: existingUser.email,
//             role: "admin", // Assign the "admin" role for the specific user
//           };
//         } else {
//           return {
//             id: existingUser.id,
//             username: existingUser.username,
//             email: existingUser.email,
//             role: "user", // Assign the "user" role for other users
//           };
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         return {
//           ...token,
//           username: user.username,
//           role: user.role || "user",
//         };
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           username: token.username,
//           role: token.role || "user",
//         },
//       };
//     },
//   },
// };

// export default NextAuth(authOptions);
import { config } from "@/utils/config";
import { db } from "@/utils/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: config.nextSecret,
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const existingUser = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
          return null;
        }
        if (
          credentials.email === "nawram@gmail.com" &&
          credentials.password === "nawram123"
        ) {
          return {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email,
            role: "admin",
          };
        } else {
          return {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email,
            role: "user",
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: User }) {
      if (user) {
        return {
          ...token,
          username: user.username,
          role: user.role || "user",
        };
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          role: token.role || "user",
        },
      };
    },
  },
};

export default NextAuth(authOptions);
