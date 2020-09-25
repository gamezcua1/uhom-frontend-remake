import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";

const ProfileHeader = ({ fullName }) => {
  return (
    <Segment
      className="profile-segment"
      padded="very"
      size="massive"
      // basic
      textAlign="center"
    >
      <Image
        avatar
        src="https://en.gravatar.com/userimage/191265949/d6b5b62c51acb05d460a4b6f39610410.png?size=100"
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
