import React from "react";
import { useRouter } from "next/router";

import { usePropertiesIndex } from "../../lib/hooks/properties";
import PropertiesCatalog from "../../components/properties/catalog/PropertiesCatalog";
import { useCurrentPage } from "../../lib/hooks/pagination";

const PropertiesIndex = () => {
  const noResultMessage =
    "No se encuentraron propiedades con las características especificadas.";
  const router = useRouter();
  const [page, setPage] = useCurrentPage(router.query.page);
  const { properties, itemsPerPage, totalItems, response } = usePropertiesIndex(
    {
      page,
    }
  );

  return (
    <PropertiesCatalog
      currentPage={page}
      itemsPerPage={itemsPerPage}
      noResultMessage={noResultMessage}
      properties={properties}
      setCurrentPage={setPage}
      totalItems={totalItems}
      response={response}
    />
  );
};

export default PropertiesIndex;
