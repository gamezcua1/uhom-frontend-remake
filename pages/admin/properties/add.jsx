import React from "react";
import { Container, Header } from "semantic-ui-react";
import PropertyForm from "../../../components/properties/form/PropertyForm";
import useAdminPermissions from "../../../lib/hooks/admins";

const Add = () => {
  useAdminPermissions();

  return (
    <Container className="users-list">
      <Header as="h1" textAlign="center">
        Agregar casa
      </Header>
      <PropertyForm />
    </Container>
  );
};

export default Add;
