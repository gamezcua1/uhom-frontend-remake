import React from "react";
import { Loader, Segment } from "semantic-ui-react";

export default function Loading({ dark }) {
  const loader = (
    <Segment padded="very" basic>
      <Loader active inline="centered" size="large">
        Cargando...
      </Loader>
    </Segment>
  );

  if (dark) return <div className="dark-bg-solid">{loader}</div>;
  return loader;
}
