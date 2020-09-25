import React from "react";
import { Image, Segment } from "semantic-ui-react";

export default function FormLogoHeader(props) {
  const { message } = props;

  return (
    <Segment basic textAlign="center" className="form-logo-segment">
      <Image
        src="/static/images/logos/NamedYellowLogo.png"
        size="small"
        centered
      />
      <h3>{message || ""}</h3>
    </Segment>
  );
}
