import React, { useContext, useState } from "react";
import SigninFirst from "../../modals/SignInFirst";
import { Button } from "semantic-ui-react";
import { UserContext } from "../../../lib/context/UserContext";
import EventLogsController from "../../../controllers/EventLogsController";

export default function AppopinmentButton({ address, price }) {
  const [modalOpen, handleModal] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const baseUri = "https://api.whatsapp.com/send?";
  const defaultPhone = "5213121042284";

  const sendMessage = () => {
    window.open(`${baseUri}phone=${defaultPhone}&text=${message()}`);
  };

  const message = () => {
    return `Hola, me gustaría una cita para conocer la casa ubicada en ${address}, que tiene un costo publicado de ${price}. Saludos!`;
  };

  const setModal = () => handleModal(!modalOpen);
  const handleAppoinment = () => {
    EventLogsController.contact();

    isLoggedIn() ? sendMessage() : setModal();
  };

  return (
    <div>
      <div>
        <SigninFirst isOpen={modalOpen} handleModal={setModal} />
      </div>
      <div className="fluid">
        <Button
          id="appoinmentButton"
          className="btn-signin"
          onClick={handleAppoinment}
        >
          ¡Conoce la casa!
        </Button>
      </div>
    </div>
  );
}
