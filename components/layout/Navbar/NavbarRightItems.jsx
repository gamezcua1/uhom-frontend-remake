import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { UserContext } from "../../../lib/context/UserContext";
import Avatar from "../Avatar";
import SessionOptions from "../SessionOptions";

export default function NavbarRightItems() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Menu.Item position="right">
      {isLoggedIn() ? <Avatar /> : <SessionOptions />}
    </Menu.Item>
  );
}
