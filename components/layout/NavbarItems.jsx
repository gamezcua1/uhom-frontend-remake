import React from "react";
import Link from "next/link";
import { Menu } from "semantic-ui-react";

export default function NavbarItems() {
  return (
    <>
      <Link href="/">
        <Menu.Item as="a">Inicio</Menu.Item>
      </Link>

      <Link href="/properties">
        <Menu.Item as="a">Propiedades</Menu.Item>
      </Link>

      <Link href="/resources">
        <Menu.Item as="a">Recursos</Menu.Item>
      </Link>

      <Link href="about-us">
        <Menu.Item as="a">Conócenos</Menu.Item>
      </Link>
    </>
  );
}
