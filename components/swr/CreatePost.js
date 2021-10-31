import { useState } from "react";
import axios from "axios";
export default function CreatePost({setPosts}) {
  const [content, setContent] = useState("");
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const id = Math.floor(Math.random() * 1000);
      const res = await axios.post("/posts", {
        id,
        content,
        createdAt: Date.now(),
      });
      setPosts(posts => [res.data, ...posts])
      setContent("");
      setLoading(false)
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
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="w-32 bg-green-600 text-white p-2 rounded hover:bg-green-800 transistion">
        {loading ? "Adding " : "Add "} Posts
      </button>
    </form>
  );
}
