import React from "react";
import Hero from "../layout/Hero";
import Banner from "../layout/Banner";
import Link from "next/link";

const Error = ({
  status = "404",
  message = "Parece que la página solicitada no existe.",
  redirectionPath = "/",
  redirectionMessage = "Regresar al inicio",
}) => (
  <Hero hero="housesHero">
    <Banner title={status} subtitle={message} dark>
      <Link href={redirectionPath} className="btn-primary">
        <a>{redirectionMessage}</a>
      </Link>
    </Banner>
  </Hero>
);

export default Error;
