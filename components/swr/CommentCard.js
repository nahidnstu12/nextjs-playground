export default function CommentCard({data}) {
    return (
      <div className="p-4 shadow-xl bg-green-300  font-semibold text-gray-800 my-4 transition rounded hover:bg-green-500 hover:text-blue-200 h-32">
        <h3>comment Id: {data.id}</h3>
        <p>{data.content}</p>
      </div>
    );
}
