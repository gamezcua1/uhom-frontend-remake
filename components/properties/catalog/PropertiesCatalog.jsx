import React, { useEffect, useState, useContext } from "react";
import { getTotalPages } from "../../../lib/services/PaginationService";
import PropertiesList from "../PropertiesList";
import Banner from "../../layout/Banner";
import Loading from "../../shared/loading";
import { UserContext } from "../../../lib/context/UserContext";

const PropertiesCatalog = ({
  currentPage,
  itemsPerPage,
  noResultMessage,
  properties,
  response,
  setCurrentPage,
  totalItems,
}) => {
  const [totalPages, setTotalPages] = useState(1);
  const { isAdmin } = useContext(UserContext);

  const updateTotalPages = () => {
    const tmpTotalPages = getTotalPages(totalItems, itemsPerPage);
    if (tmpTotalPages !== totalPages) setTotalPages(tmpTotalPages);
  };

  useEffect(() => {
    updateTotalPages();
  }, [totalItems]);

  const handlePageChange = (_event, data) => {
    const { activePage } = data;
    setCurrentPage({ page: activePage });
  };

  const paginationProps = {
    totalPages,
    currentPage,
    handleChange: handlePageChange,
  };

  if (!response) return <Loading />;
  if (!properties || properties.length === 0)
    return <Banner title="Ups!" subtitle={noResultMessage} />;
  else
    return (
      <PropertiesList
        properties={properties}
        paginationProps={paginationProps}
        isAdmin={isAdmin()}
      />
    );
};

export default PropertiesCatalog;
