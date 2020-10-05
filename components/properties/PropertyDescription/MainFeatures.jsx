import React from "react";
import { Header, Segment, Table } from "semantic-ui-react";

const MainFeatures = ({ features }) => {
  const {
    bedrooms,
    bathrooms,
    construction_area,
    front_meters,
    deep_meters,
  } = features;

  return (
    <Segment padded>
      <Header as="h3" textAlign="center">
        Características
      </Header>

      <Table stackable celled selectable>
        <Table.Body>
          <Table.Row textAlign="left">
            <Table.Cell>
              <Header as="h4">Superficie construida:</Header>
            </Table.Cell>
            <Table.Cell>
              {construction_area} mts<sup>2</sup>
            </Table.Cell>
          </Table.Row>

          <Table.Row textAlign="left">
            <Table.Cell>
              <Header as="h4">Metros de frente:</Header>
            </Table.Cell>
            <Table.Cell>{front_meters} mts</Table.Cell>
          </Table.Row>

          <Table.Row textAlign="left">
            <Table.Cell>
              <Header as="h4">Metros de fondo:</Header>
            </Table.Cell>
            <Table.Cell>{deep_meters} mts</Table.Cell>
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
