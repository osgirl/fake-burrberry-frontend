import React from "react";
import Card from "./Card";
import Accordion from "../Accordion";
import Recomendations from "./Recomendations";
import Links from "./Links";

export default () => {
  return (
    <main>
      <Card />
      <Accordion />
      <Recomendations />
      <Links />
    </main>
  );
};
