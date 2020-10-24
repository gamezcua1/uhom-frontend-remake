import React, { useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import PropertyForm from "../../../components/properties/form/PropertyForm";
import GenericSuccessMessage from "../../../components/shared/GenericSuccessMessage";
import PropertiesController from "../../../controllers/PropertiesController";
import useAdminPermissions from "../../../lib/hooks/admins";

const Index = () => {
  useAdminPermissions();
  const [isSuccess, setSuccess] = useState(false);
  const [responseErrors, setErrors] = useState({});

  const handlePropertyAdd = (property) => {
    PropertiesController.create(property)
      .then(() => setSuccess(true))
      .catch((err) => setErrors(err.response.data.details));
  };

  return (
    <Container className="users-list">
      <GenericSuccessMessage
        header="Registro exitoso"
        content="La propiedad ha sido registrada exitosamente. En la sección de 'Propiedades' verás los cambios."
        isVisible={isSuccess}
        setVisible={setSuccess}
      />

      <Segment basic>
        <Header as="h1" textAlign="center">
          Agregar casa
        </Header>

        <PropertyForm
          responseErrors={responseErrors}
          submitionHandler={handlePropertyAdd}
        />
      </Segment>
    </Container>
  );
};

export default Index;
