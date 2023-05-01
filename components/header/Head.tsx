import { NextPage } from 'next';
import { HiPhone, HiMail } from 'react-icons/hi';

interface Props {}

const Head: NextPage<Props> = ({}) => {
  return (
    <section className='bg-head py-3 text-white'>
      <div className='container flex justify-between'>
        {/* left side */}
        <div className='flex gap-10 items-center'>
          <div className='flex items-center gap-1'>
            <HiPhone />
            <label>+880 1995-63483</label>
          </div>
          <div className='flex items-center gap-1'>
            <HiMail />
            <label>example@gmail.com</label>
          </div>
        </div>

        {/* right side */}
        <div className='flex gap-5'>
          <label>Theme FAQ</label>
          <label>Need Help</label>
        </div>
      </div>
    </section>
  );
};

export default Head;
