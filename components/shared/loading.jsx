import React from "react";
import { Loader, Segment } from "semantic-ui-react";

export default function Loading() {
  return (
    <Segment padded="very" basic>
      <Loader active inline="centered" size="large">
        Cargando...
      </Loader>
    </Segment>
  );
}
