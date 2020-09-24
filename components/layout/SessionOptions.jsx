import React from "react";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

const SessionOptions = () => {
  const router = useRouter();

  return (
    <div>
      <Button.Group size="small">
        <Button className="btn-signin" onClick={() => router.push("/signin")}>
          Registrarse
        </Button>
        <Button.Or text="o" />
        <Button className="btn-login" onClick={() => router.push("/login")}>
          Iniciar sesión
        </Button>
      </Button.Group>
    </div>
  );
};

export default SessionOptions;
