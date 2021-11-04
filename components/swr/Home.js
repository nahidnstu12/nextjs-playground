import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { LoadingTale } from "../common/Loading";
import useSWR from "swr";
import PaginationTW from "../common/PaginationTW";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: posts,
    mutate,
    error,
  } = useSWR(
    `/posts?_sort=createdAt&_order=desc&_page=${currentPage}&_limit=6`
  );
  const { data: allPosts } = useSWR(`/posts`,{revalidateIfStale:false});
  // console.log(posts?.length);
  return (
    <div className="m-8">
      <CreatePost mutate={mutate} />
      <h3 className="text-center font-semibold text-2xl mt-4 text-green-800">
        All Posts
      </h3>
      {!posts && <LoadingTale />}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 h-96">
        {posts?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
      <PaginationTW
        postLength={allPosts?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
