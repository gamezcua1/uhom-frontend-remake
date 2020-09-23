import React from "react";
import Link from "next/link";
import Hero from "../components/layout/Hero";
import Banner from "../components/layout/Banner";
// import { useSessionInfo } from "../../services/sessionInfo";
// import { useUserContext } from "../../UserContext";

const Home = () => {
  const { isLogged } = { isLogged: false }; // useUserContext();

  // const session = useSessionInfo();
  const session = {};

  const subtitle = () =>
    isLogged
      ? `Bienvenido ${session.names}.`
      : "Registrate y visita la casa de tus sueños.";

  return (
    <Hero>
      <Banner title="GoHOME's" subtitle={subtitle()} dark>
        <Link passhref href="/properties">
          <a className="btn-primary">
            <strong>Nuestras casas</strong>
          </a>
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
