import { useState } from "react";
import axios from "axios";

export default function CreateComment({ postId, mutate }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const id = Math.floor(Math.random() * 1000);
      const FAKE_DATA = {
        id,
        postId,
        content,
        createdAt: Date.now(),
        clientOnly: true,
      };
      mutate((comments) => [FAKE_DATA, ...comments], false);
      setContent("");
      const res = await axios.post(`/posts/${postId}/comments`, {
        id,
        postId,
        content,
        createdAt: Date.now(),
      });
      mutate();
     
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
        Add Comment
      </button>
    </form>
  );
}
