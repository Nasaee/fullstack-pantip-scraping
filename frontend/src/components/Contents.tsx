import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import * as apiClient from '@/api-client';

const Contents = () => {
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getContents'],
    queryFn: apiClient.getContents,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  console.log(data);

  return status === 'pending' ? <div>Loading...</div> : <div>contents</div>;
};
export default Contents;
