import React, { useEffect, useContext } from "react";
import LoginForm from "../components/login/LoginForm";
import FormLogoHeader from "../components/shared/FormLogoHeader";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserContext } from "../lib/context/UserContext";

function Login() {
  const router = useRouter();
  const { currentUser, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn()) router.push("/properties");
  }, [currentUser]);

  return (
    <div className="dark-bg-solid">
      <FormLogoHeader message="Inicia sesión en GoHome's" />
      <LoginForm />
      <p className="general-callout">
        ¿Aún no tienes cuenta?
        <Link href="/signup" passHref>
          <a> Registrate aquí. </a>
        </Link>
      </p>
    </div>
  );
}

export default Login;
