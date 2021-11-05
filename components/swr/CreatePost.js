import { useState } from "react";
import axios from "axios";

export default function CreatePost({mutate}) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const id = Math.floor(Math.random() * 1000);
      const FAKE_DATA = {
        id,
        content,
        createdAt: Date.now(),
        clientOnly: true,
      };
      mutate( posts => [FAKE_DATA, ...posts], false);
      setContent("");
       await axios.post("/posts", {
        id,
        content,
        createdAt: Date.now(),
      });
     
      mutate()
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
        Add Posts
      </button>
    </form>
  );
}
