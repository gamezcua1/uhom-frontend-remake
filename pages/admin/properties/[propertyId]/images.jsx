import { useRouter } from "next/router";
import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import ImagesForm from "../../../../components/properties_images/ImagesForm";
import GenericContainer from "../../../../components/shared/Container";
import Error from "../../../../components/shared/error";
import GenericSuccessMessage from "../../../../components/shared/GenericSuccessMessage";
import Loading from "../../../../components/shared/loading";
import ImagesController from "../../../../controllers/ImagesController";
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
  const [isSuccess, setSuccess] = useState(false);
  const [responseErrors, setErrors] = useState({});

  const updateImage = (images) => {
    ImagesController.attach(propertyId, images)
      .then(() => setSuccess(true))
      .catch((err) => setErrors(err.response.data.details));
  };

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
    <GenericContainer>
      <GenericSuccessMessage
        isVisible={isSuccess}
        setVisible={setSuccess}
        header="Subida exitosa"
        content="Las imágenes se han añadido correctamente a la propiedad indicada."
      />
      <Header as="h1" content="Modificar imágenes" textAlign="center" />
      <ImagesForm
        propertyId={propertyId}
        images={images}
        submitionHandler={updateImage}
        responseErrors={responseErrors}
      />
    </GenericContainer>
  );
};

export default ImagesIndex;
