import { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';

interface Props {}

const User: NextPage<Props> = ({}) => {
  const { data: session } = useSession();
  console.log('TCL: session', session);
  return (
    <div>
      <h1>welcome to User page</h1>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
};

export default User;
