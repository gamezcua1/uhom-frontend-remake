import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
import NavbarRightItems from "./NavbarRightItems";

const DesktopNavbar = () => {
  return (
    <Menu borderless className="navbar">
      <Container>
        <Menu.Item position="left">
          <Link href="/">
            <a>
              <Image src="/images/logos/YellowLogo.png" size="mini" />
            </a>
          </Link>
        </Menu.Item>
        <NavbarItems />
        <NavbarRightItems />
      </Container>
    </Menu>
  );
};

export default DesktopNavbar;
