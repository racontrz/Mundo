import React from "react";
import Formularios from "../component/views/otros/Formularios";
import Ofertas from "../component/views/otros/Ofertas";
import Links from "../component/views/otros/Links";
import ImgRrss from "../component/views/otros/ImgRrss";
import Planes from "../component/views/otros/Planes";

const Otros = () => {
  return (
    <div>
      <Formularios />
      <Planes />
      <Ofertas />
      <Links />
      <ImgRrss />
    </div>
  );
};

export default Otros;
