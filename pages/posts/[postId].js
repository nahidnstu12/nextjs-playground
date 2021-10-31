import CommentCard from "../../components/swr/CommentCard";
import PostCard from "../../components/swr/PostCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../../components/common/Loading";
import CreateComment from "../../components/swr/CreateComment";

export default function comments() {
  const [comments, setComments] = useState(null);
  const [post, setPost] = useState(null);
  const {
    query: { postId },
  } = useRouter();
  console.log(postId);
  const getComments = async () => {
    try {
      const { data } = await axios.get(`/posts/${postId}/comments?_order=desc`);
      setComments(data);
      //   console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const getPost = async () => {
    try {
      const { data } = await axios.get(`/posts/${postId}`);
      setPost(data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (postId) {
      getComments();
      getPost();
    }
  }, [postId]);
  return (
    <div className="m-8">
      {!post && <Loading />}
      {post && <PostCard data={post} singlePost={true}/>}

      <CreateComment />

      <h3 className="text-center font-semibold text-2xl mt-4 text-green-800">
        All Comments
      </h3>
      {!comments && <Loading />}
      
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {comments?.map((comment) => (
          <CommentCard key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}
