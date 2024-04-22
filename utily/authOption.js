import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // Connect to the database
      // check if user exists
      // if not ,then add user to database
      // return true to allow sign in
    },

    async session({ session }) {
      // 1.Get user  from database
      // 2.assign the user id to the session
      // 3.return session
    },
  },
};
