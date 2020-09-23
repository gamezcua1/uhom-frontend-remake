import React from "react";
import { useParams, withRouter } from "react-router-dom";
// import { useSessionInfo } from "../../services/sessionInfo";
import PropertyDetail from "../../components/properties/PropertyDetail";
import { usePropertyShow } from "../../lib/hooks/properties";
import Error from "./Error";
import Loading from "./Loading";

function PropertyShow() {
  const { property_uuid } = useParams();
  // const { id } = useSessionInfo() || {};
  const id = 1;
  const { response, property } = usePropertyShow(
    `/properties/${property_uuid}`,
    { user_id: id }
  );

  if (!response) return <Loading />;

  return (
    <>
      {property ? (
        <PropertyDetail
          propertyInfo={property}
          propertyLocation={property.location}
        />
      ) : (
        <Error
          message="Parece que la propiedad que buscas no existe."
          redirectionPath="/properties"
          redirectionMessage="Ver más propiedades."
        />
      )}
    </>
  );
}

export default withRouter(PropertyShow);
