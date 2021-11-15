import { createContext, useState } from "react";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const defaultPost = { id: "", content: "", createdAt:"" };
  const [userPost, setUserPost] = useState(defaultPost);

  return (
    <PostContext.Provider value={{ userPost, setUserPost }}>
      {children}
    </PostContext.Provider>
  );
}
