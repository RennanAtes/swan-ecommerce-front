import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import axios from "axios";


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
      console.log('aqui é o session ')
      session.accessToken = token.accessToken;
      

      if (session.user) {
        const { name, email } = session.user;

        try {
          console.log('Vai chamar o axios')
          const response = await axios.post("http://127.0.0.1:8000/api/authentication", {
            username: name,
            email,
          });

          // Faça algo com a resposta da API do Django, se necessário
          console.log(response.data);
          session.Django = response.data.access_token
          return session;
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log('session.user não está definido');
      }
      
      // return session;
    },
    },
  }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };