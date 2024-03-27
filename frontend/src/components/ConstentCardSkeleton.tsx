import Skeleton from 'react-loading-skeleton';

const ConstentCardSkeleton = () => {
  return (
    <li className='flex gap-3 border border-slate-300 rounded-md px-5 py-4 shadow-md'>
      <Skeleton width={96} height={96} className='z-1' />
      <div className='flex-1 flex flex-col gap-3'>
        <Skeleton height={24} />
        <Skeleton height={20} />
        <Skeleton height={15} />
      </div>
    </li>
  );
};
export default ConstentCardSkeleton;
