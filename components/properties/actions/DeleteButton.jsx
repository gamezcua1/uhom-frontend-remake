import { useRouter } from "next/router";
import React from "react";
import { Button } from "semantic-ui-react";
import PropertiesController from "../../../controllers/PropertiesController";
import GenericModal from "../../shared/GenericModal";

const DeleteButton = ({ propertyId }) => {
  const router = useRouter();
  const deleteButton = <Button fluid color="red" content="Eliminar" />;

  const deleteProperty = () => {
    PropertiesController.delete(propertyId)
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  const message =
    "¿Estás seguro que quieres eliminar esta propiedad?. Una vez hecha esta acción esta propiedad ya no aparecerá en el panel de propiedades";
  return (
    <GenericModal
      iconName="delete"
      title="Eliminar propiedad"
      message={message}
      button={deleteButton}
      onAccept={deleteProperty}
    />
  );
};

export default DeleteButton;
