import React from "react";
import { useRouter } from "next/router";
import { Container, Header, Segment } from "semantic-ui-react";
import PropertyForm from "../../../components/properties/form/PropertyForm";
import useAdminPermissions from "../../../lib/hooks/admins";
import { usePropertyShow } from "../../../lib/hooks/properties";
import Loading from "../../../components/shared/loading";
import Error from "../../../components/shared/error";

const PropertyShow = () => {
  useAdminPermissions();
  const router = useRouter();
  const { propertyId } = router.query;
  const { response, property, error } = usePropertyShow({
    propertyId,
  });

  if (!response) return <Loading />;
  if (error)
    return (
      <Error
        message="Parece que la propiedad que buscas no existe."
        redirectionPath="/properties"
        redirectionMessage="Ver más propiedades."
      />
    );

  return (
    <Container>
      <Segment basic>
        <Header as="h1" textAlign="center">
          Actualizar información de la propiedad
        </Header>

        <PropertyForm
          required={false}
          discardImages
          defaultProperty={property}
        />
      </Segment>
    </Container>
  );
};

export default PropertyShow;
