import { NextPage } from 'next';
import Slider from './Slider';

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  return (
    <section className='mt-5'>
      <div className='container'>
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
