import { fetchAnnounceStart } from '@/store/announce/announceSlice';
import { RootState } from '@/store/rootReducer';
import { useEffect, useRef } from 'react';
import { TfiAnnouncement } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';

const Announce = () => {
  const dispatch = useDispatch();

  // use for call api only once at component mount ( useEffect call twice in strict mode)
  const effectRun = useRef(false);

  useEffect(() => {
    if (effectRun.current === false) {
      dispatch(fetchAnnounceStart());
      return () => {
        effectRun.current = true;
      };
    }
  }, []);

  const isAnnounceDataLoading = useSelector(
    (state: RootState) => state.announce.loading
  );

  const announceData = useSelector(
    (state: RootState) => state.announce.announceData
  );

  if (isAnnounceDataLoading) {
    // Skeleton Loading
    return (
      <div
        role='status'
        className='max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 mx-auto'
      >
        <div className='flex items-center justify-between'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4' id='announce'>
      <h2 className='flex flex-col items-center gap-2 font-bold text-xl text-gray-600'>
        <TfiAnnouncement className='text-red-500 text-2xl' />
        <span className='uppercase'>{announceData?.header}</span>
      </h2>
      <ul className='max-w-3xl mx-auto space-y-3'>
        {announceData?.announceContent.map((content) => {
          const { _id, title, link, description } = content;
          return (
            <li key={_id} className='underline'>
              <a href={link} className='flex items-center gap-2'>
                <h4 className='font-bold'>{title}</h4>

                {description}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Announce;
