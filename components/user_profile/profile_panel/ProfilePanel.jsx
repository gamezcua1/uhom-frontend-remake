import React from "react";
import { Tab } from "semantic-ui-react";
import panes from "./options/profilePanes";
import session from "../fakeSession";

const ProfilePanel = () => {
  return (
    <Tab
      menu={{ secondary: true, pointing: true }}
      panes={panes(session.id, session.authorization)}
    />
  );
};

export default ProfilePanel;
