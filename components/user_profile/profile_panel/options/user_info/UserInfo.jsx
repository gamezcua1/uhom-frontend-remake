import React from "react";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";

const UserInfo = ({ user, handleEdition, canEdit }) => {
  return (
    <>
      <Segment vertical>
        {canEdit && (
          <Grid.Column width={4}>
            <Button
              floated="right"
              className="btn-signin"
              icon
              onClick={handleEdition}
            >
              <Icon name="edit" size="large" /> Editar
            </Button>
          </Grid.Column>
        )}

        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={6}>
              <Header
                as="h3"
                content="Nombre(s):"
                subheader={` ${user.names}`}
              />
            </Grid.Column>

            <Grid.Column width={6}>
              <Header
                as="h3"
                content="Apellido(s):"
                subheader={` ${user.surnames}`}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row verticalAlign="middle">
            <Grid.Column width={6}>
              <Header
                as="h3"
                content="Correo electrónico:"
                subheader={` ${user.email}`}
              />
            </Grid.Column>

            <Grid.Column width={6}>
              <Header
                as="h3"
                content="Celular: "
                subheader={` ${user.phone_number}`}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default UserInfo;
