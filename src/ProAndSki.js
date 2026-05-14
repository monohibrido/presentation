import logogoogle from "../src/images/gwa.jpg";
import logopython from "../src/images/logo_python.png";
import logohtml5 from "../src/images/logo_html5.png";

import logosql from "../src/images/logo_sql.png";
import logoangular from "../src/images/logo_angular.png";
import logoscrum from "../src/images/certiprof.jpg";
import logogooglefund from "../src/images/gwf.jpg";
import logonodejs from "../src/images/logo_nodejs.png"
import logotypescript from "../src/images/logo_typescript.png"
import "./ProAndSki.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function Experience() {
  return (
    <div id="experience" className="container mt-5">
      <h1>Projects & Skills</h1>
      <div className="card card-body col col-12 col-lg-8 mt-4">
        <div className="row">
          <div className=" d-flex flex-column justify-content-start ">
            <h5>Projects</h5>
            <p>
              - Application Web "Chile Economic Indicators " <strong>in Angular v21  </strong> through an API
              mindicador.cl  -

              <strong>
                <a
                  href="https://monohibrido.github.io/Chile-Economic-Indicators/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1da810', textDecoration: 'underline' }}
                >
                  link to GithubPages
                </a></strong>
              <br />

              - Application Web "Grading Scale" <strong>in Angular v21  </strong>  -
              <strong>
                <a
                  href="https://monohibrido.github.io/escala-de-notas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1da810', textDecoration: 'underline' }}
                >
                  link to GithubPages
                </a></strong>
              <br />
              - Application Web "Inventory & Sales Dashboard" <strong>in Angular v21 sequelize, Node.js - Express, SQL  </strong>
              <br />
              - Python scripts to automate windows jobs.
              <br />
              - Contact List in Python alongside Tkinter. <br />
              - Muscle Mass Index Calculator web application. <br />
              - Calculation of the footprint water in Javascript and PHP. <br />
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-3">

            <img
              src={logoangular}
              alt="img logo angular"
              className="logoangular img-fluid"
            />
            <img
              src={logonodejs}
              alt="img logo nodejs"
              className="logonodejs img-fluid"
            />
            <img
              src={logotypescript}
              alt="img logo typescript"
              className="logotypescript img-fluid"
            />
            <img
              src={logosql}
              alt="img logo sql"
              className="logosql img-fluid"
            />
            <img
              src={logopython}
              alt="img logo python"
              className="logopython img-fluid"
            />
            <img
              src={logohtml5}
              alt="img logo html5"
              className="logohtml5 img-fluid"
            />


          </div>
        </div>
      </div>

      <div className="card card-body col col-12 col-lg-8 mt-4">
        <div className="row">
          <h5>Certifications</h5>
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <PhotoProvider>
              <PhotoView src={logoscrum}>
                <img
                  src={logoscrum}
                  alt="Diploma"
                  style={{ width: "200px", cursor: "pointer" }}
                />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={logogoogle}>
                <img
                  src={logogoogle}
                  alt="Diploma"
                  style={{ width: "200px", cursor: "pointer" }}
                />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={logogooglefund}>
                <img
                  src={logogooglefund}
                  alt="Diploma"
                  style={{ width: "200px", cursor: "pointer" }}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </div>

      <div className="card card-body col col-12 col-lg-8 mt-4">
        <div className="row">
          <div className=" d-flex flex-column justify-content-start ">
            <h5>Skills</h5>
            <p>

              <br />
              <strong>FRONTEND</strong> <br />
              - HTML | CSS | JS | TYPESCRIPT
              <br />
              - Angular v21

              <br />
              - React-DOM
              <br />
              <br />
              <strong>BACKEND</strong>
              <br />
              - NodeJS
              <br />
              - Express
              <br />
              <br />
              <strong>DATABASE</strong>
              <br />- Management in MySQL | SQL
              <br />
              <br />
              <strong>PLUS</strong>
              <br />
              - Python | Tkinter
            </p>

          </div>
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <img
              src={logoangular}
              alt="img logo angular"
              className="logoangular img-fluid"
            />
            <img
              src={logonodejs}
              alt="img logo nodejs"
              className="logonodejs img-fluid"
            />
            <img
              src={logotypescript}
              alt="img logo typescript"
              className="logotypescript img-fluid"
            />
            <img
              src={logosql}
              alt="img logo sql"
              className="logosql img-fluid"
            />
            <img
              src={logopython}
              alt="img logo python"
              className="logopython img-fluid"
            />
            <img
              src={logohtml5}
              alt="img logo html5"
              className="logohtml5 img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
