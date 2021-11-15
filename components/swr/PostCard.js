import Link from "next/link";
import { subTitle } from "../../utils/helpers";
import { FiEdit, FiDelete } from "react-icons/fi";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PostContext } from "./PostContext";

export default function PostCard({ data, singlePost, handleDelete,setUserPost }) {
  const content = singlePost ? data.content : subTitle(data.content, 90);
 
  const router = useRouter();

  return (
    <div className="relative">
      <Link href={`/posts/${data?.id}`}>
        <div
          className={`p-4 shadow-xl bg-green-300  font-semibold text-gray-800 my-4 transition rounded hover:bg-green-500 hover:text-blue-200 h-min-32 ${
            data.clientOnly ? "border border-red-900" : ""
          }`}
        >
          <div className="flex justify-between">
            <h3>Post Id: {data.id}</h3>
          </div>
          <p>{content}</p>
        </div>
      </Link>
      {router.pathname === "/swr" && (
        <div className="flex items-center justify-center absolute top-6 right-6">
          <div className="grid place-items-center hover:bg-yellow-300 hover:rounded-full w-8 h-8">
            <FiEdit
              className="text-red-500 hover:text-red-600  my-auto"
              onClick={() => setUserPost(data)}
            />
          </div>
          <div className="grid place-items-center hover:bg-yellow-300 hover:rounded-full w-8 h-8">
            <FiDelete
              className="text-red-500 hover:text-red-600  my-auto"
              onClick={() => handleDelete(data.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
