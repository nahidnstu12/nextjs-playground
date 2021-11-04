import CommentCard from "../../components/swr/CommentCard";
import PostCard from "../../components/swr/PostCard";
import { useRouter } from "next/router";
import { LoadingTale } from "../../components/common/Loading";
import CreateComment from "../../components/swr/CreateComment";
import useSWR from "swr";
import useSWRFallbackData from "../../hooks/useSWRFallbackData";

export default function comments() {
  const {
    query: { postId },
  } = useRouter();
  // console.log(currentPost);
  console.log(`client/posts/${postId}`);

  const {
    data: comments,
    commentErr,
    mutate,
  } = useSWR(`/posts/${postId}/comments?_sort=createdAt&_order=desc`);
  const { data: post, postErr } = useSWR(postId && `/posts/${postId}`);
  // const { data: post, postErr } = useSWRFallbackData(`/posts/${postId}`, {
  //   fallbackData: currentPost,
  // });
  // const postIndex = posts?.findIndex((post) => post.id === Number(postId));
  console.log(post);
  console.log(comments);
  return (
    <div className="m-8">
      {!post && <LoadingTale />}

      {post && <PostCard data={post} singlePost={true} />}

      <CreateComment postId={postId} mutate={mutate} />

      <h3 className="text-center font-semibold text-2xl mt-4 text-green-800">
        All Comments
      </h3>
      {!comments && <LoadingTale />}
      {!comments && <div>{commentErr}</div>}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {comments?.map((comment) => (
          <CommentCard key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps({params}) {
//   console.log(`server/posts/${params.postId}`);
//   let currentPost = [];
//   try {
//     const { data } = await axios.get(`/posts/${params.postId}`);
//     currentPost = data;
//   } catch (err) {
//     currentPost = [];
//   }
//   console.log(currentPost);
//   return {
//     props: {currentPost} // will be passed to the page component as props
//   };
// }
