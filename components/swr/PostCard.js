import Link from "next/link";
import { subTitle } from "../../utils/helpers";

export default function PostCard({ data, singlePost }) {
 
  const content = singlePost ? data.content : subTitle(data.content, 90);
  return (
    <Link href={`/posts/${data.id}`}>
      <div className={`p-4 shadow-xl bg-green-300  font-semibold text-gray-800 my-4 transition rounded hover:bg-green-500 hover:text-blue-200 h-min-32 ${data.clientOnly ? "border border-red-900" : ""}`}>
        <h3>Post Id: {data.id}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}
