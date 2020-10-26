import React from "react";
import { Button } from "semantic-ui-react";
import ImagesController from "../../controllers/ImagesController";
import GenericModal from "../shared/GenericModal";

const DeleteImageButton = ({ imageId, propertyId }) => {
  const deleteButton = (
    <Button color="red" icon="delete" content="Eliminar imagen" />
  );

  const deleteImage = () => {
    ImagesController.delete(propertyId, imageId).then(() =>
      window.location.reload()
    );
  };

  return (
    <GenericModal
      button={deleteButton}
      iconName="delete"
      message="¿Estás seguro que deseas eliminar esta imágen?"
      onAccept={deleteImage}
    />
  );
};

export default DeleteImageButton;
