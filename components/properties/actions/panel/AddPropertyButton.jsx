import React from "react";
import { Button, Menu } from "semantic-ui-react";

const AddPropetyButton = () => {
  return (
    <Menu.Item>
      <Button
        id="addProperty"
        icon="add"
        content="Agregar propiedad"
        className="btn-login"
      />
    </Menu.Item>
  );
};

export default AddPropetyButton;
