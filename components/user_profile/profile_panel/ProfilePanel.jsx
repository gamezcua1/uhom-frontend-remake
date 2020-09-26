import React, { useContext } from "react";
import { Tab } from "semantic-ui-react";
import { UserContext } from "../../../lib/context/UserContext";
import panes from "./options/profilePanes";

const ProfilePanel = () => {
  const { currentUser, token } = useContext(UserContext);

  return (
    <Tab
      menu={{ secondary: true, pointing: true }}
      panes={panes(currentUser.uuid, token)}
    />
  );
};

export default ProfilePanel;
