import React from "react";
import { Tab } from "semantic-ui-react";
import InfoPane from "./user_info/InfoPane";
import LikesPane from "./user_likes/LikesPane";

const panes = (userId, userToken) => [
  {
    menuItem: { key: "my-likes", content: "Mis Casas" },
    // eslint-disable-next-line react/display-name
    render: () => <LikesPane />,
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
