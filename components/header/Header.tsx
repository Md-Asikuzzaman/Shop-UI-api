import { NextPage } from 'next';

import Navbar from './Navbar';
import Head from './Head';
import Search from './Search';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
};

export default Header;
