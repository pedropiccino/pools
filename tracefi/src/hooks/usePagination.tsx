import { useState, useMemo } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const currentItems = useMemo(() => {
      const start = (currentPage - 1) * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);
  
    return {
      currentItems,
      currentPage,
      totalPages,
      setPage: setCurrentPage,
      nextPage: () => setCurrentPage((p) => Math.min(p + 1, totalPages)),
      prevPage: () => setCurrentPage((p) => Math.max(p - 1, 1)),
    };
  }