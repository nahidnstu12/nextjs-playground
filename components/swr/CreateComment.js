export default function CreateComment() {
  return (
    <form className="flex flex-col gap-4">
      <textarea
        placeholder="Write your comment"
        className="p-4"
        rows={3}
        cols={6}
      ></textarea>
      <button className="w-32 bg-green-600 text-white p-2 rounded hover:bg-green-800 transistion">
        Add Comment
      </button>
    </form>
  );
}
