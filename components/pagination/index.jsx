'use client';
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';



export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="hover:bg-dark-50 rounded-md p-2 disabled:cursor-not-allowed disabled:opacity-50 "
        aria-label="Previous page"
      >
        <HiArrowSmLeft className="h-5 w-5" />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`rounded-md px-4 py-2 text-neutrals-1000 text-sm ${currentPage === pageNumber
              ? 'bg-primary-200 text-white'
              : 'hover:bg-neutrals-50'
              }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="hover:bg-neutrals-50 rounded-md p-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Next page"
      >
        <HiArrowSmRight className="h-5 w-5" />
      </button>
    </div>
  );
}