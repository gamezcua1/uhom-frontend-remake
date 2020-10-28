import React, { useState } from "react";
import { useRouter } from "next/router";
import { Header, Segment } from "semantic-ui-react";
import PropertyForm from "../../../../components/properties/form/PropertyForm";
import useAdminPermissions from "../../../../lib/hooks/admins";
import { usePropertyShow } from "../../../../lib/hooks/properties";
import Loading from "../../../../components/shared/loading";
import Error from "../../../../components/shared/error";
import { cleanEmpties } from "../../../../lib/hooks/dataFormater";
import PropertiesController from "../../../../controllers/PropertiesController";
import GenericSuccessMessage from "../../../../components/shared/GenericSuccessMessage";
import GenericContainer from "../../../../components/shared/Container";

const PropertyShow = () => {
  useAdminPermissions();
  const router = useRouter();
  const { propertyId } = router.query;
  const { response, property, error } = usePropertyShow({
    propertyId,
  });

  const [isSuccess, setSuccess] = useState(false);
  const [responseErrors, setErrors] = useState({});

  const updateProperty = (property) => {
    const cleanProperty = cleanEmpties(property);
    PropertiesController.update(propertyId, cleanProperty)
      .then(() => setSuccess(true))
      .catch((err) => setErrors(err.response.data.details));
  };

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
    <GenericContainer>
      <Segment basic>
        <GenericSuccessMessage
          header="Actualización exitosa"
          content="La información de la propiedad ha sido actualizada de manera exitosa."
          isVisible={isSuccess}
          setVisible={setSuccess}
        />
        <Header as="h1" textAlign="center">
          Actualizar información de la propiedad
        </Header>

        <PropertyForm
          required={false}
          willUpdate
          defaultProperty={property}
          responseErrors={responseErrors}
          submitionHandler={updateProperty}
          icon="edit"
          buttonMessage="Actualizar cambios"
        />
      </Segment>
    </GenericContainer>
  );
};

export default PropertyShow;
