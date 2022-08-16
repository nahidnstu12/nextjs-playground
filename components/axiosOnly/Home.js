import axios from "axios";
import { useState } from "react";
import Animation from "../animateCss/Animation";
import { getData, postData } from "./fetchData";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const createPostInput = () => (
    <div className="flex">
      <input
        placeholder="type post"
        className="p-2 w-1/2 ml-10 mt-10"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button
        className="ml-10 mt-10 p-4 rounded border border-red-500 hover:bg-red-500 hover:text-white"
        onClick={() => createPost()}
      >
        create Post
      </button>
    </div>
  );
  //   const handlePost = async () => {
  //     // console.log("handlePost")
  //     try {
  //       const { data } = await instance.get("/posts?_sort=createdAt&_order=desc");
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const handlePost = async () => {
    const data = await getData(`/posts?_sort=createdAt&_order=desc`);
    console.log(data);
  };
  const createPost = async () => {
    const id = Math.floor(Math.random() * 1000);
    const newPost = {
      id,
      content,
      createdAt: Date.now(),
    };
    await postData("/posts", { ...newPost });
    setContent("");
    // console.log(data);
  };
  //   const createPost = async (e) => {
  //     try {
  //       const id = Math.floor(Math.random() * 1000);

  //       await instance.post("/posts", {
  //         id,
  //         content,
  //         createdAt: Date.now(),
  //       });
  //       setContent("");
  //       console.log("success")
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <div className="flex gap-4 flex-col">
      <div>
        <button
          className="ml-14 mt-10 p-4 rounded border border-red-500 hover:bg-red-500 hover:text-white"
          onClick={() => handlePost()}
        >
          Generate Post Id
        </button>
      </div>
      {createPostInput()}
      <Animation />
    </div>
  );
}

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
  headers: { "X-Auth-Token": "eyJhbGciOiJ" },
});
// axios.defaults.headers.common["X-Auth-Token"] = "eyJhbGciOiJ";
