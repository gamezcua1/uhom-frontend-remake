import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import PropertiesList from "../../components/properties/PropertiesList";
import { getTotalPages } from "../../lib/services/PaginationService";
import Banner from "../../components/properties/PropertiesList";
import { usePropertiesIndex } from "../../lib/hooks/properties";
import { UserContext } from "../../lib/context/UserContext";

const PropertiesCatalog = () => {
  const { currentUser } = useContext(UserContext);

  const noResultsMessage =
    "No se encuentraron propiedades con las características especificadas.";
  const router = useRouter();
  const [page, setPage] = useState(router.query.page || 1);
  const [totalPages, setTotalPages] = useState(1);
  const { properties, itemsPerPage, totalItems } = usePropertiesIndex({
    page,
    user_id: currentUser.id,
  });

  const updateTotalPages = () => {
    const tmpTotal = getTotalPages(totalItems, itemsPerPage);
    if (tmpTotal !== totalPages) setTotalPages(tmpTotal);
  };

  useEffect(() => {
    updateTotalPages();
  }, [totalItems, router.query]);

  const handleChange = (_event, data) => {
    const currentPage = data.activePage;
    setPage(currentPage);
    router.push(`/properties?page=${currentPage}`);
  };

  const paginationProps = {
    totalPages: totalPages,
    currentPage: page,
    handleChange: handleChange,
  };

  if (!properties || properties.length === 0)
    return <Banner title="Ups!" subtitle={noResultsMessage} />;
  else
    return (
      <PropertiesList
        properties={properties}
        paginationProps={paginationProps}
      />
    );
};

export default PropertiesCatalog;
