"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationContainer({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const renderPages = () => {
    let pages: (number | string)[] = [];

    if (currentPage <= 2) {
      pages = [1, 2];
    } else {
      pages = [1, 2, "...", currentPage];
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2 lg:gap-5">
      {/* Previous */}
      <button
        className={cn(
          "px-3 py-1 rounded bg-main-light hover:bg-main cursor-pointer h-8 lg:h-12",
          currentPage === 1 && " hidden"
        )}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* Pages */}
      {renderPages().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={cn(
              "px-3 py-1 bg-main-light hover:bg-main cursor-pointer size-8 lg:size-12 rounded",
              page === currentPage && "bg-main text-white border-black"
            )}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        className={cn(
          "px-3 py-1 h-8 lg:h-12 hover:bg-main cursor-pointer bg-main-light rounded",
          currentPage === totalPages && "hidden"
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
