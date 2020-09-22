import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "../../static/styles/General/backgrounds.css";
import "../../static/styles/General/callouts.css";
import { useUserContext, useUserDispatch } from "../../UserContext";
import UsersController from "../../controllers/UsersController";
import loginHandler from "../../services/sessionHandlers/authService";
import SetUserForm from "../smart/Forms/SetUserForm";
import FormLogoHeader from "../smart/Segments/FormLogoHeader";

function Signin() {
  const { isLogged } = useUserContext();
  const [responseErrors, setErrors] = useState({});
  const dispatch = useUserDispatch();

  const suscribe = (data, event) => {
    UsersController.create(data)
      .then((res) => {
        if (res.status === 200) {
          const loginData = {
            email: data.email,
            password: data.password,
          };
          loginHandler(loginData, dispatch);
        }
      })
      .catch((err) => setErrors(err.response.data.details));
  };
  return (
    <>
      {isLogged ? (
        <Redirect to="/properties" />
      ) : (
        <div className="dark-bg-solid">
          <FormLogoHeader message="Registrate con nosotros" />
          <SetUserForm
            submitionHandler={suscribe}
            responseErrors={responseErrors}
            extraClasses={"dark"}
            iconName="home"
            submitButtonMessage="Comenzar"
          />
          <p className="general-callout">
            ¿Ya tienes cuenta con nosotros?{" "}
            <Link to="/login">Inicia sesión aquí.</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default withRouter(Signin);
