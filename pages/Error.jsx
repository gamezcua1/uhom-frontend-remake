import React from "react";
import Hero from "../dumb/Hero";
import Banner from "../dumb/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero hero="housesHero">
      <Banner title="404" subtitle="No se encontro la pagina" dark>
        <Link to="/" className="btn-primary">
          Regresar al inicio
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
