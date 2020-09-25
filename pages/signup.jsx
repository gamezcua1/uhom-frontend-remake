import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserForm from "../components/forms/UserForm";
import { useCurrentUser } from "../lib/context/UserContext";
import FormLogoHeader from "../components/shared/FormLogoHeader";

const signup = () => {
  const { isLoggedIn } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if(isLoggedIn()) router.push("/");
  },[]);

  return (
    <div className="dark-bg-solid">
      <FormLogoHeader message="Registrate con nosotros" />
      <UserForm
        customClasses="dark"
        iconName="home"
        submitMessage="Registrarse"
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
