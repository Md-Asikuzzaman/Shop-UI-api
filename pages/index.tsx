import BottomInfo from '@/components/footer/BottomInfo';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Flash from '@/components/home/Flash';
import Hero from '@/components/home/Hero';
import Product from '@/components/home/Product';
import { NextPage } from 'next';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Header />
      <Hero />
      <Flash />
      <Product />
      <BottomInfo />
      <Footer />
    </>
  );
};

export default Home;
