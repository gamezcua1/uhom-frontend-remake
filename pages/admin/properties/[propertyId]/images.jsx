import { useRouter } from "next/router";
import React from "react";
import { Container, Form, Header } from "semantic-ui-react";
import PropertyImagesField from "../../../../components/properties/form/PropertyImagesField";
import ImageList from "../../../../components/properties_images/ImagesList";
import Error from "../../../../components/shared/error";
import GoBackButton from "../../../../components/shared/GoBackButton";
import Loading from "../../../../components/shared/loading";
import useAdminPermissions from "../../../../lib/hooks/admins";
import { usePropertyShow } from "../../../../lib/hooks/properties";

const ImagesIndex = () => {
  useAdminPermissions();
  const router = useRouter();
  const { propertyId } = router.query;
  const { error, property, response } = usePropertyShow({
    propertyId,
  });
  const { images = [] } = property || {};

  if (error)
    return (
      <Error
        message="Parece que la propiedad que buscas no existe."
        redirectionPath="/properties"
        redirectionMessage="Volver al catálogo de propiedades."
      />
    );

  if (!response) return <Loading />;

  return (
    <Container className="users-list">
      <Header as="h1" content="Modificar imágenes" textAlign="center" />
      <Form className="large">
        <PropertyImagesField />
        <GoBackButton />
        <ImageList images={images} propertyId={propertyId} />
      </Form>
    </Container>
  );
};

export default ImagesIndex;
