import { announce } from '@/data';
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

  return (
    <div className='flex flex-col gap-4' id='announce'>
      <h2 className='flex flex-col items-center gap-2 font-bold text-xl text-gray-600'>
        <TfiAnnouncement className='text-red-500 text-2xl' />
        <span className='uppercase'>Announce</span>
      </h2>
      <ul className='max-w-3xl mx-auto space-y-3'>
        {announce.map((announce) => {
          const {
            id,
            title,
            description,
            separatorIcon: SeparatorIcon,
          } = announce;
          return (
            <li key={id}>
              <a href='#' className='flex items-center gap-2 underline'>
                <h4 className='font-bold'>{title}</h4>
                <SeparatorIcon />
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
