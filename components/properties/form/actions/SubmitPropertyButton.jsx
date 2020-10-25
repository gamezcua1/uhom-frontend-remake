import React from "react";
import { Button } from "semantic-ui-react";
import GenericModal from "../../../shared/GenericModal";

const SubmitPropertyButton = ({
  buttonMessage,
  icon,
  handleSubmit,
  submitionHandler,
  willUpdate,
}) => {
  const button = (
    <Button
      id="submitProperty"
      className="btn-login"
      type="submit"
      icon={icon}
      content={buttonMessage}
    />
  );

  const message =
    "Antes de continuar, verifica que la información ingresada sea la correcta.";
  const title = willUpdate
    ? "Actualizar información de la propiedad"
    : "Agregar nueva propiedad";

  return (
    <GenericModal
      button={button}
      iconName="upload"
      onAccept={handleSubmit(submitionHandler)}
      title={title}
      message={message}
    />
  );
};

export default SubmitPropertyButton;
