import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "../../prisma/db";
import { nextCookies } from "better-auth/next-js";
 
export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),
    emailAndPassword: {  
        enabled: true,
        minPasswordLength: 8,
        autoSignIn: true
    },
    account: {
        accountLinking: {
            enabled: true
        }
    },
    socialProviders: { 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            mapProfileToUser: (profile) => {
                const fullName = profile.name || profile.login || '';
                const [firstName, ...rest] = fullName.split(" ");
                const lastName = rest.join(" ") || "GitHubUser"; // fallback if no last name

                return {
                    firstName: firstName,
                    lastName
                };
            },
        },
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            mapProfileToUser: (profile) => {
                return {
                    firstName: profile.given_name,
                    lastName: profile.family_name,
                };
            }, 
        },
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                input: false, // don't allow user to set role
            },
            firstName: {
                type: "string",
                required: true,
            },
            lastName: {
                type: "string",
                required: true,
            },
        },
    },
    
    plugins: [nextCookies()]
});