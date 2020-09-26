import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserForm from "../components/users/UserForm";
import { UserContext } from "../lib/context/UserContext";
import FormLogoHeader from "../components/shared/FormLogoHeader";

const signup = () => {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) router.push("/");
  }, [currentUser]);

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="dark-bg-solid">
      <FormLogoHeader message="Registrate con nosotros" />
      <UserForm
        customClasses="dark"
        iconName="home"
        submitMessage="Registrarse"
        submitionHandler={handleSignUp}
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
