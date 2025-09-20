import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

export const auth = betterAuth({
    // where is the user data stored: can be prisma or mangodb etc
    database:prismaAdapter(prisma,  { provider: "postgresql" }),
    emailAndPassword:{
        enabled:true,
    },
    socialProviders:{
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
          },
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          },
    }
})