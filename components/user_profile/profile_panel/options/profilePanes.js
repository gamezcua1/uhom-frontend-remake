import React from "react";
import { Tab } from "semantic-ui-react";
import InfoPane from "./user_info/InfoPane";

const panes = (userId, userToken) => [
  {
    menuItem: { key: "my-likes", content: "Mis Casas" },
    // eslint-disable-next-line react/display-name
    render: () => <Tab.Pane />,
  },
  {
    menuItem: { key: "info", content: "Información" },
    // eslint-disable-next-line react/display-name
    render: () => (
      <Tab.Pane>
        <InfoPane userId={userId} bearerToken={userToken} />
      </Tab.Pane>
    ),
  },
];

export default panes;
