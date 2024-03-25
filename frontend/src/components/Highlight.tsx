import { highlights } from '@/data';

const Highlight = () => {
  return (
    <div className='px-2 md:px-4 lg:px-6 ' id='highlight'>
      <h2 className='font-bold text-2xl mb-4'>Highlight</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  gap-6'>
        {highlights.map((highlight) => {
          const { id, image, description } = highlight;
          return (
            <div
              key={id}
              className='grid grid-rows-[2fr_90px]  h-[300px] border border-slate-200 rounded-md overflow-hidden shadow-md'
            >
              <div>
                <img
                  src={image}
                  alt={description}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='py-4 px-2'>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Highlight;
