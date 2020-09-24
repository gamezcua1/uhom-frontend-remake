import React from "react";
import { Header, Segment, Table } from "semantic-ui-react";

const MainFeatures = (props) => {
  const { bedrooms, bathrooms, square_meters } = props.features;

  return (
    <Segment padded>
      <Header as="h3" textAlign="center">
        Características
      </Header>

      <Table stackable celled selectable>
        <Table.Body>
          <Table.Row textAlign="left">
            <Table.Cell>
              <Header as="h4">Superficie de construcción:</Header>
            </Table.Cell>
            <Table.Cell>
              {square_meters} mts<sup>2</sup>
            </Table.Cell>
          </Table.Row>

          <Table.Row textAlign="left">
            <Table.Cell>
              <Header as="h4">Recámara(s):</Header>
            </Table.Cell>
            <Table.Cell>{bedrooms}</Table.Cell>
          </Table.Row>

          <Table.Row textAlign="left">
            <Table.Cell>
              <Header as="h4">Baño(s):</Header>
            </Table.Cell>
            <Table.Cell>{bathrooms}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default MainFeatures;
