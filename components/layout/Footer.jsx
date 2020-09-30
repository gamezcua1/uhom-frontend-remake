import React from "react";
import { Container, Grid, Icon, Image, List, Segment } from "semantic-ui-react";

export default function Footer() {
  const FACEBOOK_URI =
    "https://www.facebook.com/venta.de.casas.infonavit.fovissste";

  return (
    <Segment inverted vertical attached="bottom" style={{ padding: "1em" }}>
      <Container textAlign="center">
        <Image centered size="mini" src="/images/logos/YellowLogo.png" />
        <Grid stackable>
          <Grid.Column width={8}>
            <List horizontal>
              <List.Item>
                © 2020 GoHome&apos;s. Todos los derechos reservados.
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={8}>
            <List link inverted horizontal floated="right">
              <List.Item href={FACEBOOK_URI}>
                <Icon link name="facebook official" size="large" />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}
