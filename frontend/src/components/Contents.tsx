import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import * as apiClient from '@/api-client';
import { MdOutlineChat } from 'react-icons/md';
import ConstentCardSkeleton from './ConstentCardSkeleton';
import { useEffect } from 'react';

const Contents = () => {
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getContents'],
    queryFn: ({ pageParam }) => apiClient.getContents(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  });

  return status === 'pending' ? (
    <ul ref={ref} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {Array.from({ length: 4 }).map((_, i) => {
        return <ConstentCardSkeleton key={i} />;
      })}
    </ul>
  ) : (
    <div>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        {data?.pages.map((page) =>
          page.data.map((content) => {
            const {
              _id,
              header,
              contentImageUrl,
              link,
              tags,
              author,
              commentCount,
            } = content;
            return (
              <li
                key={_id}
                className='border border-slate-300 rounded-md px-5 py-4 shadow-md hover:bg-violet-50'
              >
                <div className='flex gap-3'>
                  {contentImageUrl && (
                    <a href={link}>
                      <img
                        src={contentImageUrl}
                        alt={header}
                        className='w-24 h-24 object-cover'
                      />
                    </a>
                  )}
                  <div className='flex-1 flex flex-col gap-3'>
                    <h2 className='font-bold text-black hover:text-violet-500'>
                      <a href={link} target='_blank'>
                        {header}
                      </a>
                    </h2>
                    <ul className='flex gap-1 flex-wrap'>
                      {tags.map((tag) => (
                        <li
                          key={tag._id}
                          className='text-xs tracking-wide px-2 py-1 border border-slate-300 hover:bg-violet-300 text-black rounded-full '
                        >
                          <a href={tag.tagLink} target='_blank'>
                            {tag.tagName}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className='flex justify-between'>
                      <a
                        href={author.authorProfileUrl}
                        className='text-xs font-bold hover:text-black'
                      >
                        {author.authorName}
                      </a>
                      <div className='flex items-center gap-1'>
                        <MdOutlineChat className='text-xl' />
                        <span className='text-sm font-semibold'>
                          {commentCount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
      <ul ref={ref} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {isFetchingNextPage &&
          Array.from({ length: 4 }).map((_, i) => {
            return <ConstentCardSkeleton key={i} />;
          })}
      </ul>
    </div>
  );
};
export default Contents;
