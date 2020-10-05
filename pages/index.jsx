import React, { useContext } from "react";
import Link from "next/link";
import Hero from "../components/layout/Hero";
import Banner from "../components/layout/Banner";
import { UserContext } from "../lib/context/UserContext";

const Home = () => {
  const { currentUser, isLoggedIn } = useContext(UserContext);

  const subtitle = () =>
    isLoggedIn()
      ? `Bienvenido ${currentUser.names}.`
      : "Registrate, es tiempo de ir a casa.";

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
