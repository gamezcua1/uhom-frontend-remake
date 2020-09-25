import React, { useEffect } from "react";
import LoginForm from "../components/login/LoginForm";
import { useUserContext } from "../lib/context/UserContext";
import FormLogoHeader from "../components/shared/FormLogoHeader";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const { isLogged } = useUserContext();

  useEffect(() => {
    if (isLogged) router.push("/properties");
  }, []);

  return (
    <div className="dark-bg-solid">
      <FormLogoHeader message="Inicia sesión en GoHome's" />
      <LoginForm />
      <p className="general-callout">
        ¿Aún no tienes cuenta?
        <Link href="/signin" passHref>
          <a> Registrate aquí. </a>
        </Link>
      </p>
    </div>
  );
}

export default Login;
