import React from "react";
import { Container } from "semantic-ui-react";

const GenericContainer = ({ children }) => (
  <Container className="users-list">{children}</Container>
);

export default GenericContainer;
