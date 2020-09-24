import React from "react";
import { Menu } from "semantic-ui-react";
import { useUserContext } from "../../lib/context/UserContext";
import Avatar from "./Avatar";
import SessionOptions from "./SessionOptions";

export default function NavbarRightItems() {
  const { isLogged } = useUserContext();
  return (
    <Menu.Item position="right">
      {isLogged ? <Avatar /> : <SessionOptions />}
    </Menu.Item>
  );
}
