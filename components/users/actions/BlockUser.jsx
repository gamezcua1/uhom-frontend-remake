import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import UsersController from "../../../controllers/UsersController";

const BlockUser = ({ user }) => {
  const [blocked, setBlocked] = useState(user.blocked);

  const toggleBlock = () => {
    setBlocked(!blocked);

    blocked
      ? UsersController.update(user.uuid, { blocked: false })
      : UsersController.block(user.uuid);
  };

  const btnClass = blocked ? "btn-login" : "btn-signin";

  return (
    <Button
      fluid
      id="toggleUserBlock"
      className={btnClass}
      onClick={toggleBlock}
    >
      {blocked ? "Desbloquear" : "Bloquear"}
    </Button>
  );
};

export default BlockUser;
