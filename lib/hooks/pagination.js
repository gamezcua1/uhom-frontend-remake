import { useEffect, useState } from "react";

export function useCurrentPage(queryPage) {
  const [currentPage, setCurrentPage] = useState(queryPage);

  useEffect(() => {
    setCurrentPage(queryPage || 1);
  }, [queryPage]);

  return [currentPage, setCurrentPage];
}
