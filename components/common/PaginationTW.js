import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useSWR from "swr";

export default function PaginationTW({ currentPage, setCurrentPage }) {
  //   const [currentPage, setCurrentPage] = useState(1);
  const { data: allPosts } = useSWR(`/posts`, { revalidateIfStale: false });
  let postLength = allPosts?.length;
  let pages = postLength >= 6 ? Math.ceil(postLength / 6) : 1;
  //   console.log(pages);
  const handlePaginate = (key) => {
    setCurrentPage(key);
    // console.log(key);
  };
  const NumberIndex = ({ index, handlePaginate }) => {
    //   console.log(key);
    const styles =
      currentPage === index
        ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50";
    return (
      <a
        href="#"
        aria-current="page"
        className={`${styles} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        onClick={handlePaginate}
      >
        {index}
      </a>
    );
  };
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

            {[...Array(pages)].map((_, j) => (
              <NumberIndex
                index={j + 1}
                key={j}
                handlePaginate={() => handlePaginate(j + 1)}
              />
            ))}

            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <span className="sr-only">Next</span>
              <BsChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
