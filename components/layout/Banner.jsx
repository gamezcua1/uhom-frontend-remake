import React from "react";

const Banner = ({ children, dark, title = "", subtitle = "" }) => (
  <div className={`banner ${dark ? "dark" : ""}`}>
    <h1>{title}</h1>
    <div />
    <p>{subtitle}</p>
    {children}
  </div>
);

export default Banner;
