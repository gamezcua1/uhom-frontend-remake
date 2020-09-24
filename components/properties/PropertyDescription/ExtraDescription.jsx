import React from "react";
import { Header, List, Segment } from "semantic-ui-react";
import { useCRLF } from "../../../lib/hooks/dataFormater";

const ExtraDescription = ({ extraDescription }) => {
  const defaultDescription = "Esta propiedad no tiene descripción adicional";

  const items = useCRLF(extraDescription, defaultDescription);

  return (
    <Segment>
      <Header as="h3" textAlign="center">
        Descripción adicional
      </Header>
      <Segment className="scrollable">
        <List items={items} />
      </Segment>
    </Segment>
  );
};

export default ExtraDescription;
