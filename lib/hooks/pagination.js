import { useEffect, useState } from "react";

export function useCurrentPage(queryPage) {
  const [currentPage, setCurrentPage] = useState(queryPage);

  useEffect(() => {
    queryPage ? setCurrentPage(queryPage) : setCurrentPage(1);
  }, [queryPage]);

  return [currentPage, setCurrentPage];
}
