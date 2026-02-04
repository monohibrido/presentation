import React from "react";
import logoIpss from "../src/images/logo_ipss_web.png";
import logoUcen from "../src/images/LogoUCEN.png";
import fotoPerfil from "../src/images/foto_perfil.png";

import "./About.css";

function About() {
  return (
    <div id="about" className="container mt-5">
      <h1>About me</h1>
      <div className="row align-items-center">
        <div className=" col-md-3 text-center">
          <img className="fotoPerfil img-fluid" src={fotoPerfil} alt="Logo" />
        </div>

        <div className="col-md-9">
          <p>
            My name is Cristian and I dedicate myself to the immense world of
            programming. My tastes are focused on web programming and desktop
            applications. I am excited to be able to expand my knowledge in my
            profession. I work methodically thanks to the years I worked as a
            teacher. I don't work badly alone, but I always prefer to be with a
            team; I consider the work environment important and beneficial for
            productivity and mental health.
          </p>
        </div>
        <div className="card card-body mt-4">
          <div className="row">
            <div className="col-md-4">
              <img className="logoIpss img-fluid" src={logoIpss} alt="Logo" />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-start">
              <h5>Technician in Programming and Systems Analysis</h5>
              <h5>Instituto Profesional San Sebastián</h5>
              <p>2022-2025</p>
            </div>
          </div>
        </div>
        <div className="card card-body mt-4">
          <div className="row">
            <div className="col-md-4">
              <img className="logoUcen img-fluid" src={logoUcen} alt="Logo" />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-start">
              <h5>Pedagogy in Physical Education and Health</h5>
              <h5>Universidad Central</h5>
              <p>2012-2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
