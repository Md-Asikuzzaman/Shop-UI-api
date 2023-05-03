import { NextPage } from 'next';
import Head from './header/Head';
import Search from './header/Search';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

interface Props {}

const Layout: NextPage<Props> = ({ children }: any) => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
