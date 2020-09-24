import React from "react";
import { Header, Segment } from "semantic-ui-react";

const MainInfo = ({ price, fullAddress }) => (
  <Segment padded>
    <Header as="h1" content={price} subheader={fullAddress} />
  </Segment>
);

export default MainInfo;
