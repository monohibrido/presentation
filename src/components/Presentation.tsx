import { useState, useEffect } from "react";
import fotoPerfil from "../assets/images/fotoperfil.png";

function Presentation() {
  const texto = "Cristian Orellana Vega";
  const velocidad = 80;
  const pausa = 2000;

  const [nombre, setNombre] = useState("");
  const [i, setI] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (!borrando && i < texto.length) {
      timeout = setTimeout(() => setI(i + 1), velocidad);
    } else if (!borrando && i === texto.length) {
      timeout = setTimeout(() => setBorrando(true), pausa);
    } else if (borrando && i > 0) {
      timeout = setTimeout(() => setI(i - 1), velocidad / 3);
    } else {
      setBorrando(false);
    }

    return () => clearTimeout(timeout);
  }, [i, borrando]);

  useEffect(() => {
    setNombre(texto.substring(0, i));
  }, [i]);

  return (
    <div className="card mx-auto mt-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={fotoPerfil}
            className="img-fluid rounded-start"
            alt="Foto de perfil"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">About me</h3>
            <h5 id="nombre">{nombre}</h5>
            <p>orellana.vega.cristian@gmail.com</p>
            <p className="card-text">
              My name is Cristian and I dedicate myself to the immense world of
              programming. My tastes are focused on web programming, I am
              excited to be able to expand my knowledge in my profession. I work
              methodically thanks to the years I worked as a teacher. I don't
              work badly alone, but I always prefer to be with a team; I
              consider the work environment important and beneficial for
              productivity and mental health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
