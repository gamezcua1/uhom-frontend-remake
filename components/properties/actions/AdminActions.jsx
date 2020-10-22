import React from "react";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

const AdminActions = ({ uuid }) => {
  const router = useRouter();

  return (
    <div className="btn-fluid-actions">
      <Button
        fluid
        className="btn-login"
        onClick={() => router.push(`/admin/properties/${uuid}`)}
      >
        Editar
      </Button>
      <Button fluid className="btn-signin">
        Eliminar
      </Button>
    </div>
  );
};

export default AdminActions;
