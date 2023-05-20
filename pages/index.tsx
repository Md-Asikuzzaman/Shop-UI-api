import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import BottomInfo from '@/components/footer/BottomInfo';
import Product from '@/components/home/Product';
import { NextPage } from 'next';
import Flash from '@/components/home/Flash';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Hero />
      <Product />
      <Flash />
      <BottomInfo />
    </Layout>
  );
};

export default Home;
