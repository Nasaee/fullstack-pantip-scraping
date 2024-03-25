import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { rooms } from '../data';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div className='flex justify-center max-w-7xl mx-auto'>
      <Carousel
        opts={{
          align: 'center',
        }}
        className='w-full max-w-md md:max-w-lg lg:max-w-6xl'
      >
        <CarouselContent>
          {rooms.map((room) => {
            const { id, title, path, icon: Icon } = room;
            return (
              <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                <Link
                  to={path}
                  className='flex flex-col gap-2 items-center p-4 hover:border-b border-slate-400 transition-all'
                >
                  <Icon />
                  <p>{title}</p>
                </Link>
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
