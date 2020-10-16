import React from "react";
import { useRouter } from "next/router";

import { usePropertiesIndex } from "../../lib/hooks/properties";
import PropertiesCatalog from "../../components/properties/catalog/PropertiesCatalog";
import PropertiesPanelOptions from "../../components/properties/actions/panel/PropertiesPanelOptions";

const PropertiesIndex = () => {
  const noResultMessage =
    "No se encuentraron propiedades con las características especificadas.";
  const router = useRouter();
  const { properties, itemsPerPage, totalItems, response } = usePropertiesIndex(
    router.asPath
  );

  const getProperties = ({ page, filter }) =>
    router.push({
      pathname: "/properties",
      query: {
        ...(page ? router.query : {}),
        ...filter,
        page: filter ? 1 : page,
      },
    });

  return (
    <>
      <PropertiesPanelOptions
        getProperties={getProperties}
        filters={router.query}
      />
      <PropertiesCatalog
        currentPage={router.query.page || 1}
        itemsPerPage={itemsPerPage}
        noResultMessage={noResultMessage}
        properties={properties}
        setCurrentPage={getProperties}
        totalItems={totalItems}
        response={response}
      />
    </>
  );
};

export default PropertiesIndex;
