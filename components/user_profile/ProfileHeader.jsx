import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import { defaults } from "../../lib/defaults";

const ProfileHeader = ({ fullName, avatar }) => {
  return (
    <Segment
      className="profile-segment"
      padded="very"
      size="massive"
      textAlign="center"
    >
      <Image
        className="custom-avatar medium-avatar"
        src={avatar || defaults.avatar}
        size="small"
        verticalAlign="middle"
      />

      <Header as="h1" inverted>
        {fullName}
      </Header>
    </Segment>
  );
};

export default ProfileHeader;
