import CommentCard from "../../components/swr/CommentCard";
import PostCard from "../../components/swr/PostCard";
import { useRouter } from "next/router";
import { LoadingTale } from "../../components/common/Loading";
import CreateComment from "../../components/swr/CreateComment";
import useSWR from "swr";
import useSWRPaginate from "../../hooks/useSWRPaginate";
import InfiniteScroll from "react-infinite-scroll-component";

export default function comments() {
  const {
    query: { postId },
  } = useRouter();

  // console.log(currentComments);
  // console.log(`client/posts/${postId}`);

  const {
    paginatedData: comments,
    size,
    setSize,
    isReachedEnd,
    mutate,
  } = useSWRPaginate(`/posts/${postId}/comments?_sort=createdAt&_order=desc`, {
    // fallbackData: currentComments.length === 0 ? null : currentComments,
    revalidateIfStale: false,
  });

  const { data: post, postErr } = useSWR(`/posts/${postId}`, {
    // fallbackData: currentPost.length === 0 ? null : currentPost, //if ssr fails
    revalidateIfStale: false,
  });

  console.log("post");
  // console.log(comments?.length);
  return (
    <div className="m-8">
      {!post && <LoadingTale />}

      {post && <PostCard data={post} singlePost={true} />}

      <CreateComment postId={postId} mutate={mutate} />

      <h3 className="text-center font-semibold text-2xl mt-4 text-green-800">
        All Comments 
      </h3>
      {/* {!comments && <LoadingTale />} */}
      {/* {!comments && <div>{commentErr}</div>} */}
      <InfiniteScroll
        dataLength={comments?.length ?? 0} //This is important field to render the next data
        next={() => setSize(size + 1)}
        hasMore={!isReachedEnd}
        loader={<LoadingTale />}
        style={{ overflow: null }}
      >
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {comments?.map((comment) => (
            <CommentCard key={comment.id} data={comment} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   console.log(`server/posts/${params.postId}`);
//   let currentPost = [];
//   let currentComments = [];
//   try {
//     const { data } = await axios.get(`/posts/${params.postId}`);
//     const res2 = await axios.get(
//       `/posts/${params.postId}/comments?_sort=createdAt&_order=desc&_page=1&_limit=6`
//     );
//     currentPost = data;
//     currentComments = res2.data.flat();
//   } catch (err) {
//     currentPost = [];
//     currentComments = [];
//     console.log(err);
//   }
//   console.log(currentPost);
//   return {
//     props: { currentPost, currentComments }, // will be passed to the page component as props
//   };
// }
