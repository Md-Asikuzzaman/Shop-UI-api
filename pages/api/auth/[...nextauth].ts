import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    CredentialsProvider({
      name: 'Credentials',

      credentials: {},

      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        if (username != 'asik' && password != 'asik') {
          return null;
        } else {
          return { id: 'as', username: username, password: password };
        }
      },
    }),
  ],

  pages: {
    signIn: '/account/register',
  },
});
