import React from 'react';
import "../../static/styles/General/backgrounds.css"
import {LoginForm} from "../smart/Login/LoginForm";
import { Link, Redirect, withRouter} from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import FormLogoHeader from '../smart/Segments/FormLogoHeader';

function Login(){

  const { isLogged } = useUserContext();

  return(
    <>
    { isLogged
      ? <Redirect to="/properties"/>
      : <div className="dark-bg-solid">
          <FormLogoHeader message="Inicia sesión en GoHome's"/>
          <LoginForm/>
          <p className="general-callout">
            ¿Aún no tienes cuenta? <Link to="/signin">Registrate aquí.</Link>
          </p>
        </div>
    }
    </>
  )
}

export default withRouter(Login)
