import React from "react";
import Hero from "../components/layout/Hero";
import Banner from "../components/layout/Banner";
import Link from "next/link";

const Error = () => {
  return (
    <Hero hero="housesHero">
      <Banner title="404" subtitle="No se encontro la pagina" dark>
        <Link href="/" passHref className="btn-primary">
          <a> Regresar al inicio </a>
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
