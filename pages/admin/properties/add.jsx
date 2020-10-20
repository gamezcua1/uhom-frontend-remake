import React, { useState } from "react";
import { Container, Header, Message } from "semantic-ui-react";
import PropertyForm from "../../../components/properties/form/PropertyForm";
import PropertiesController from "../../../controllers/PropertiesController";
import useAdminPermissions from "../../../lib/hooks/admins";

const Add = () => {
  useAdminPermissions();
  const [isSuccess, setSuccess] = useState(false);
  const [responseErrors, setErrors] = useState({});

  const handlePropertyAdd = (property) => {
    PropertiesController.create(property)
      .then(() => handleMessage())
      .catch((err) => setErrors(err.response.data.details));
  };

  const handleMessage = () => {
    setSuccess(true);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <Container className="users-list">
      {isSuccess && (
        <Message
          icon="check circle outline"
          success
          header="Registro exitoso"
          content="La propiedad ha sido registrada exitosamente. En la sección de 'Propiedades' verás los cambios."
        />
      )}

      <Header as="h1" textAlign="center">
        Agregar casa
      </Header>
      <PropertyForm
        responseErrors={responseErrors}
        submitionHandler={handlePropertyAdd}
      />
    </Container>
  );
};

export default Add;
