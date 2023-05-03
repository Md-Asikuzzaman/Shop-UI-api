import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import BottomInfo from '@/components/footer/BottomInfo';
import Product from '@/components/home/Product';
import { NextPage } from 'next';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Hero />
      <Product />
      <BottomInfo />
    </Layout>
  );
};

export default Home;
