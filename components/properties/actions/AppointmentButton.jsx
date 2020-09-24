import React, { useState } from "react";
import Link from "next/link";
// import { useUserContext } from "../../../UserContext";
import SigninFirst from "../../modals/SignInFirst";

export default function AppopinmentButton(props) {
  const { address, price } = props;
  const [modalOpen, handleModal] = useState(false);
  // const { isLogged } = useUserContext();
  const isLogged = false;
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
  const handleAppoinment = () => (isLogged ? sendMessage() : setModal());

  return (
    <div>
      <div>
        <SigninFirst isOpen={modalOpen} handleModal={setModal} />
      </div>
      <div className="fluid">
        <Link
          href="#"
          className="ui button btn-signin"
          onClick={() => handleAppoinment()}
        >
          <a> ¡Haz una cita, visita la casa! </a>
        </Link>
      </div>
    </div>
  );
}
