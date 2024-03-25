import { pantipRealTime } from '@/data';
import { IoChatboxOutline } from 'react-icons/io5';
import { BsPlusSquare } from 'react-icons/bs';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const PantipRealTime = () => {
  const [isShrink, setIsShrink] = useState(true);

  const displayData = isShrink ? pantipRealTime.slice(0, 6) : pantipRealTime;
  return (
    <div className='px-2 md:px-4 lg:px-6'>
      <h2 className='font-bold text-2xl mb-6'>Pantip RealTime</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2'>
        {displayData.map((topic) => {
          const { id, header, comment: commentCount, add } = topic;
          return (
            <li key={id} className='border'>
              <a
                href='#'
                className='flex flex-col gap-3  py-4 px-5 hover:text-gray-800 transition-all'
              >
                <h3 className='font-bold text-lg text-gray-800 hover:underline'>
                  {header}
                </h3>
                <div className='flex justify-between flex-wrap'>
                  <p className='flex items-center gap-2 hover:underline'>
                    สมาชิกหมายเลข {id}
                  </p>
                  <div className='flex gap-3'>
                    <div className='flex gap-1 items-center'>
                      <IoChatboxOutline />
                      <span>{commentCount}</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <BsPlusSquare />
                      <span>{add}</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      <button
        className='bg-violet-500 hover:bg-violet-400 text-white px-4 py-2 rounded block w-full'
        onClick={() => setIsShrink(!isShrink)}
      >
        {isShrink ? (
          <span className='flex items-center justify-center gap-2'>
            <span>Show More</span>
            <IoIosArrowDown />
          </span>
        ) : (
          <span className='flex items-center justify-center gap-2'>
            <span>Show Less</span>
            <IoIosArrowUp />
          </span>
        )}
      </button>
    </div>
  );
};
export default PantipRealTime;
