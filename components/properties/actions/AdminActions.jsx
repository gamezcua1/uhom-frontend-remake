import React from "react";
import { Button } from "semantic-ui-react";

const AdminActions = () => {
  return (
    <div className="btn-fluid-actions">
      <Button fluid className="btn-login">
        Editar
      </Button>
      <Button fluid className="btn-signin">
        Eliminar
      </Button>
    </div>
  );
};

export default AdminActions;
