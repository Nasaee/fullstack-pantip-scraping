import Announce from '@/components/Announce';
import Highlight from '@/components/Highlight';
import PantipRealTime from '@/components/PantipRealTime';

const Home = () => {
  return (
    <section className='flex flex-col gap-12 bg-white px-4'>
      <div className='mt-6'>
        <Announce />
      </div>
      <Highlight />
      <hr className='w-[50%] mx-auto' />
      <PantipRealTime />
    </section>
  );
};
export default Home;
