import React, { useContext } from "react";
import { useRouter } from "next/router";
import PropertyDetail from "../../components/properties/PropertyDetail";
import { usePropertyShow } from "../../lib/hooks/properties";
import Error from "../../components/shared/error";
import Loading from "../../components/shared/loading";
import { UserContext } from "../../lib/context/UserContext";

function PropertyShow() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const { propertyId } = router.query;
  const { response, property } = usePropertyShow({
    propertyId,
    user_id: currentUser.uuid,
  });

  if (!response) return <Loading />;
  if (!property)
    return (
      <Error
        message="Parece que la propiedad que buscas no existe."
        redirectionPath="/properties"
        redirectionMessage="Ver más propiedades."
      />
    );

  return (
    <PropertyDetail
      propertyInfo={property}
      propertyLocation={property.location}
    />
  );
}

export default PropertyShow;
