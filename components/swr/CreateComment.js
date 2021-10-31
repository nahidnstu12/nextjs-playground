import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateComment({postId,setComments}) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
// console.log(postId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = Math.floor(Math.random() * 1000);
      const res = await axios.post(`/posts/${postId}/comments`, {
        id,
        postId,
        content,
        createdAt: Date.now(),
      });
      setComments((comments) => [res.data, ...comments]);
      setContent("");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your comment"
        className="p-4"
        rows={3}
        cols={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="w-32 bg-green-600 text-white p-2 rounded hover:bg-green-800 transistion">
        {loading ? "Adding " : "Add "} Comment
      </button>
    </form>
  );
}
