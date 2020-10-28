import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserForm from "../components/users/UserForm";
import { UserContext } from "../lib/context/UserContext";
import FormLogoHeader from "../components/shared/FormLogoHeader";
import UsersController from "../controllers/UsersController";
import { LoginService } from "../lib/services/session/AuthService";
import { cleanEmpties } from "../lib/hooks/dataFormater";

const signup = () => {
  const { currentUser, isLoggedIn, login } = useContext(UserContext);
  const [responseErrors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) router.push("/");
  }, [currentUser]);

  const handleSignUp = (user) => {
    const cleanUserData = cleanEmpties(user);
    UsersController.create(cleanUserData)
      .then(async () => {
        await LoginService(
          {
            email: user.email,
            password: user.password,
          },
          login
        );
      })
      .catch((err) => setErrors(err.response.data.details));
  };

  return (
    <div className="dark-bg-solid">
      <FormLogoHeader message="Registrate con nosotros" />
      <UserForm
        customClasses="dark"
        iconName="home"
        submitMessage="Registrarse"
        submitionHandler={handleSignUp}
        responseErrors={responseErrors}
        action="ADD_USER"
        isCancelable={false}
      />

      <p className="general-callout">
        ¿Ya tienes cuenta con nosotros?{" "}
        <Link href="/login">
          <a>Inicia sesión aquí</a>
        </Link>
      </p>
    </div>
  );
};

export default signup;
