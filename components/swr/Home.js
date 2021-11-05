import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { LoadingTale } from "../common/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRPaginate from "../../hooks/useSWRPaginate";

export default function Home() {
  const { paginatedData, size, setSize, isReachedEnd, mutate } = useSWRPaginate(
    "/posts?_sort=createdAt&_order=desc",
    {
      // fallbackData: serverPosts?.length === 0 ? null : serverPosts, //if ssr fails
      revalidateIfStale: false,
    }
  );
  // console.log(serverPosts);
  let length = paginatedData?.length;
  // console.log({ posts, size });
  return (
    <div className="m-8">
      <CreatePost mutate={mutate} />
      <h3 className="text-center font-semibold text-2xl mt-4 text-green-800">
        All Posts - {length} - {size}
      </h3>

      <InfiniteScroll
        dataLength={paginatedData?.length ?? 0} //This is important field to render the next data
        next={() => setSize(size + 1)}
        hasMore={!isReachedEnd}
        loader={<LoadingTale />}
        style={{ overflow: null }}
      >
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
          {paginatedData?.map((post) => (
            <PostCard key={post.id} data={post} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

