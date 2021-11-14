import useSWRInfinite from "swr/infinite";

export default function useSWRPaginate(url, options) {
  const PAGE_SIZE = 6;
  const getKey = (pageIndex, previousPageData) => {
    // console.log(previousPageData.length);
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null; // reached the end
    console.log(`${url}&_page=${pageIndex}&_limit=${PAGE_SIZE}`);
    return `${url}&_page=${pageIndex}&_limit=${PAGE_SIZE}`; // SWR key
  };

  const { data, mutate, error, size, setSize } = useSWRInfinite(
    getKey,
    options
  );

  let paginatedData = data?.flat();
  //   let pageSize = size

  const isReachedEnd = data && data[data.length - 1]?.length < PAGE_SIZE;
  //   let pageSize = data[data?.length - 1]?.length;
  //   console.log({data, isReachedEnd});

  const isLoadingMore = data && typeof data[size - 1]?.length === undefined;

  return {
    paginatedData,
    mutate,
    error,
    size,
    setSize,
    isLoadingMore,
    isReachedEnd,
  };
}
