import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { LoadingTale } from "../common/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRPaginate from "../../hooks/useSWRPaginate";
import CreateUserPost from "./CreateUserPost";
import axios from "axios";
import { useContext } from "react";
import { PostContext } from "./PostContext";

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

  const handleDelete = async (id) => {
    if (window.confirm("Are You Sure To Delete?")) {
      const updatedPosts = paginatedData.filter((post) => post.id !== id);
      mutate(updatedPosts, false);
      await axios.delete(`/posts/${id}`);
      mutate();
    }
  };
  const { setUserPost } = useContext(PostContext);
  return (
    <div className="m-8">
      {/* <CreatePost mutate={mutate} /> */}
      <CreateUserPost mutate={mutate} posts={paginatedData} />
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
            <PostCard key={post.id} data={post} handleDelete={handleDelete} setUserPost={setUserPost}/>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
