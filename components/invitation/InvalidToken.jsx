import React from "react";
import { Container } from "semantic-ui-react";
import FormLogoHeader from "../shared/FormLogoHeader";

const InvalidToken = () => (
  <div className="dark-bg-solid">
    <FormLogoHeader message="¡Ups! Parece que el token proporcionado no es válido" />

    <Container textAlign="justified" className="dark text">
      <p>
        Parece que ha habido un error al momento de completar tu registro
        mediante el token. Te recomendamos lo siguiente:
      </p>

      <ul>
        <li>Verifica que el token que ingresaste sea el correcto.</li>
        <li>
          Verifica que el token que ingresaste no haya caducado. Tienen vigencia
          de 7 días.
        </li>
      </ul>

      <p>
        Para renovación del token, contacta al administrador que te ha invitado
        previamente.
      </p>
    </Container>
  </div>
);

export default InvalidToken;
