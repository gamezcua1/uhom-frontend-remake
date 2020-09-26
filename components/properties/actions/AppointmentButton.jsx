import React, { useState } from "react";
import SigninFirst from "../../modals/SignInFirst";
import { Button } from "semantic-ui-react";
import { useCurrentUser } from "../../../lib/context/UserContext";

export default function AppopinmentButton({ address, price }) {
  const [modalOpen, handleModal] = useState(false);
  const { isLoggedIn } = useCurrentUser();
  const baseUri = "https://api.whatsapp.com/send?";
  const defaultPhone = "5213121042284";

  const sendMessage = () => {
    const message = setMessage();
    window.open(`${baseUri}phone=${defaultPhone}&text=${message}`);
  };

  const setMessage = () => {
    return `Hola, me gustaría una cita para conocer la casa ubicada en ${address}, que tiene un costo publicado de ${price}. Saludos!`;
  };

  const setModal = () => handleModal(!modalOpen);
  const handleAppoinment = () => (isLoggedIn() ? sendMessage() : setModal());

  return (
    <div>
      <div>
        <SigninFirst isOpen={modalOpen} handleModal={setModal} />
      </div>
      <div className="fluid">
        <Button className="btn-signin" onClick={() => handleAppoinment()}>
          ¡Haz una cita, visita la casa!
        </Button>
      </div>
    </div>
  );
}
