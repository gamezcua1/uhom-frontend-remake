import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useRouter } from "next/router";

const SigninFirst = ({ isOpen, handleModal }) => {
  const router = useRouter();

  return (
    <Modal
      dimmer
      open={isOpen}
      size="tiny"
      onClose={() => handleModal()}
      style={{ top: "40%" }}
    >
      <Modal.Header> ¡Ups! Parece que aún no te has registrado </Modal.Header>
      <Modal.Content>
        <p>
          Registrate con nosotros para poder acceder a todas las
          funcionalidades.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => handleModal()} icon>
          Cancelar
        </Button>

        <Button
          className="btn-login"
          onClick={() => router.push("/signin")}
          icon
        >
          Registrarse
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SigninFirst;
