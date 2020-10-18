import React from "react";
import Link from "next/link";
import { Button, Menu } from "semantic-ui-react";

const AddPropetyButton = () => {
  return (
    <Link href="/admin/properties/add">
      <Menu.Item>
        <Button
          id="addProperty"
          icon="add"
          content="Agregar propiedad"
          className="btn-login"
        />
      </Menu.Item>
    </Link>
  );
};

export default AddPropetyButton;
