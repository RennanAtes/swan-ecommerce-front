import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import axios from "axios";
import { setCookie } from "nookies";


export const authOptions = {
  // Configure one or more authentication providers
  
  secret : process.env.SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // ...add more providers here
  ],

  pages: {
    signIn: "/signIn",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
  
      return session;
    },


    }
    
  }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };