import React from "react";
import Link from "next/link";
import { Menu } from "semantic-ui-react";

export default function NavbarItems({ handleSideBar }) {
  return (
    <>
      <Link href="/">
        <Menu.Item onClick={handleSideBar} as="a">
          Inicio
        </Menu.Item>
      </Link>

      <Link href="/properties">
        <Menu.Item onClick={handleSideBar} as="a">
          Propiedades
        </Menu.Item>
      </Link>

      <Link href="/resources">
        <Menu.Item onClick={handleSideBar} as="a">
          Recursos
        </Menu.Item>
      </Link>

      <Link href="about-us">
        <Menu.Item onClick={handleSideBar} as="a">
          Conócenos
        </Menu.Item>
      </Link>
    </>
  );
}
