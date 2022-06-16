import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  pages: {
    signIn: "/sign-in"
  },
  providers: [
    Credentials({
      name: "Sign-in",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(cred) {
        if (cred?.password && cred?.username) {
          const password = cred?.password;
          const username = cred?.username;

          const response = await fetch(`${process.env.API_AUTH_URL}/sessions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username,
              password
            })
          });

          const data = await response.json();

          if (data.user) {
            return { ...data.user, token: data.token };
          }
        }

        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.token = token.token;
        session.id = token.id;
        session.username = token.username;
      }

      return Promise.resolve(session);
    },
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.token = user.token;
      }

      return Promise.resolve(token);
    }
  }
});
