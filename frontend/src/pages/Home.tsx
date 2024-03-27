import Announce from '@/components/Announce';
import Contents from '@/components/Contents';

const Home = () => {
  return (
    <section className='flex flex-col gap-12 bg-white px-4'>
      <div className='mt-6'>
        <Announce />
      </div>
      <Contents />
    </section>
  );
};
export default Home;
