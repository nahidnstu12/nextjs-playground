import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import Loading from "../common/Loading";

export default function Home() {
  const [posts, setPosts] = useState(null);
  const getPosts = async () => {
    try {
      const response = await axios.get("/posts?_sort=createdAt&_order=desc");
      setPosts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
      getPosts();
  }, []);
  return (
    <div className="m-8">
      <CreatePost setPosts={setPosts}/>
      <h3 className="text-center font-semibold text-2xl mt-4 text-green-800">
        All Posts
      </h3>
      {!posts && <Loading />}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {posts?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}
