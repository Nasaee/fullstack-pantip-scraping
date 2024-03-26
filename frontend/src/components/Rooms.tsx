import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomsDataStart } from '@/store/roomsData/roomsDataSlice';
import { RootState } from '@/store/rootReducer';

const Rooms = () => {
  // use for call api only once at component mount ( useEffect call twice in strict mode)
  const effectRun = useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (effectRun.current === false) {
      dispatch(fetchRoomsDataStart());
      return () => {
        effectRun.current = true;
      };
    }
  }, []);

  const isRoomDataLoading = useSelector(
    (state: RootState) => state.rooms.isLoading
  );

  const roomData = useSelector((state: RootState) => state.rooms.roomsData);

  if (isRoomDataLoading) {
    return (
      <div className='flex justify-center max-w-5xl mx-auto'>
        <Carousel
          opts={{
            align: 'center',
          }}
          className='w-full max-w-md md:max-w-lg lg:max-w-6xl'
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <CarouselItem key={i} className='basis-1/3 lg:basis-1/6 py-5'>
                  <div className='p-4'>
                    <SkeletonTheme baseColor='#dee2e6' highlightColor='#ced4da'>
                      <Skeleton height='80px' />
                    </SkeletonTheme>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
  return (
    <div className='flex justify-center max-w-7xl mx-auto'>
      <Carousel
        opts={{
          align: 'center',
        }}
        className='w-full max-w-md md:max-w-lg lg:max-w-6xl'
      >
        <CarouselContent>
          {roomData.map((room) => {
            const { _id, title, link, iconUrl } = room;
            return (
              <CarouselItem key={_id} className='basis-1/3 lg:basis-1/6 py-5'>
                <a
                  href={link}
                  target='_blank'
                  className='flex flex-col gap-2 items-center p-4 hover:border-b border-slate-400 transition-all bg-violet-600 text-white'
                >
                  <img src={iconUrl} className='w-10 h-10' />
                  <p>{title}</p>
                </a>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Rooms;
