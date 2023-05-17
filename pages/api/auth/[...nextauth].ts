import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    CredentialsProvider({
      name: 'Credentials',

      credentials: {},

      async authorize(credentials, req) {
        await dbConnect();

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // CHECK EXISTING USER
        var result = await User.findOne({
          email: email,
        });
        if (!result) throw new Error('User does not exist!');

        // COMPARE PASSWORD
        const checkPassword = await compare(password, result.password);
        if (!checkPassword) throw new Error('Invalid credentials!');

        const user = {
          id: result?._id,
          name: result?.username,
          email: result?.email,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: '/account/login',
  },
});
