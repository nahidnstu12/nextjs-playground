import { useContext } from "react";
import axios from "axios";
import { PostContext } from "./PostContext";

export default function CreateUserPost({ mutate, posts }) {
  const { setUserPost, userPost } = useContext(PostContext);
  const { id, content, createdAt } = userPost;
  // console.log(posts);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserPost({ ...userPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const newId = Math.floor(Math.random() * 1000);
      const FAKE_DATA = {
        id: id ? id : newId,
        content,
        createdAt: id ? createdAt : Date.now(),
        clientOnly: true,
      };
      if (id) {
        const updatePosts = posts.map((post) =>
          post.id === id ? { ...FAKE_DATA } : post
        );
        setUserPost({ ...FAKE_DATA });
        mutate(updatePosts, false);
        await axios.patch(`/posts/${id}`, {
          content,
        });
      } else {
        mutate((posts) => [FAKE_DATA, ...posts], false);
        await axios.post("/posts", {
          id: newId,
          content,
          createdAt: Date.now(),
        });
      }

      setUserPost({ id: "", content: "", createdAt: "" });

      mutate();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your posts"
        className="p-4"
        rows={3}
        cols={6}
        value={content}
        onChange={handleInput}
        name="content"
      ></textarea>
      <button className="w-32 bg-green-600 text-white p-2 rounded hover:bg-green-800 transistion">
        {id ? "Update Post" : "Add Posts"}
      </button>
    </form>
  );
}
