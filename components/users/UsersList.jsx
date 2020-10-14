import React from "react";
import { Container, Header, Table } from "semantic-ui-react";
import Banner from "../layout/Banner";
import UserRow from "./UserForm/UserRow";

const UsersList = ({ users = [], error }) => {
  if (error || (!users && users.length === 0))
    return (
      <Banner title="Ups!" subtitle={error || "No hay usuarios por mostrar"} />
    );

  return (
    <Container className="users-list">
      <Header as="h1">Usuarios registrados</Header>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Teléfono</Table.HeaderCell>
            <Table.HeaderCell>Correo electrónico</Table.HeaderCell>
            <Table.HeaderCell>Rol</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <UserRow user={user} key={user.uuid} />
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default UsersList;
