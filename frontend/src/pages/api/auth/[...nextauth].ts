// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectToDatabase from "../../../utils/dbConnect"; // Adjust the import path as needed
import { verifyPassword } from "../../../utils/auth"; // You'll implement this

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found with the email");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // The sign in page you created
  },
});
