import React from "react";
import { useRouter } from "next/router";
import PropertyDetail from "../../components/properties/PropertyDetail";
import { usePropertyShow } from "../../lib/hooks/properties";
import Error from "../../components/shared/error";
import Loading from "../../components/shared/loading";

function PropertyShow() {
  const router = useRouter();
  const { propertyId } = router.query;
  const { response, property, error } = usePropertyShow({
    propertyId,
  });

  if (error)
    return (
      <Error
        message="Parece que la propiedad que buscas no existe."
        redirectionPath="/properties"
        redirectionMessage="Ver más propiedades."
      />
    );
  if (!response) return <Loading />;

  return (
    <PropertyDetail
      propertyInfo={property}
      propertyLocation={property.location}
    />
  );
}

export default PropertyShow;
