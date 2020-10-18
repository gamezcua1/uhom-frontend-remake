import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import UsersController from "../../../controllers/UsersController";
import GenericModal from "../../../components/shared/GenericModal";

const BlockUser = ({ user }) => {
  const [blocked, setBlocked] = useState(user.blocked);

  const toggleBlock = () => {
    setBlocked(!blocked);

    blocked
      ? UsersController.update(user.uuid, { blocked: false })
      : UsersController.block(user.uuid);
  };

  const btnClass = blocked ? "btn-login" : "btn-signin";
  const blockText = blocked ? "Desbloquear" : "Bloquear";

  const button = (
    <Button fluid id="toggleUserBlock" className={btnClass}>
      {blockText}
    </Button>
  );

  return (
    <GenericModal
      button={button}
      iconName="lock"
      title={`${blockText} usuario`}
      message={`¿Estás seguro que deseas ${blockText.toLowerCase()} a ${
        user.names
      }?`}
      onAccept={toggleBlock}
    />
  );
};

export default BlockUser;
