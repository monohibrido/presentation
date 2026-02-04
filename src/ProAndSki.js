import logogoogle from "../src/images/gwa.jpg";
import logopython from "../src/images/logo_python.png";
import logohtml5 from "../src/images/logo_html5.png";
import logophp from "../src/images/logo_php.png";
import logosql from "../src/images/logo_sql.png";
import logoscrum from "../src/images/certiprof.jpg";
import logogooglefund from "../src/images/gwf.jpg";
import "./ProAndSki.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function Experience() {
  return (
    <div id="experience" className="container mt-5">
      <h1>Projects & Skills</h1>
      <div className="card card-body col-8 mt-4">
        <div className="row">
          <div className=" d-flex flex-column justify-content-start ">
            <h5>Projects</h5>
            <p>
              - Python scripts to automate windows jobs.
              <br />
              - Contact List in Python alongside Tkinter. <br />
              - Muscle Mass Index Calculator web application. <br />
              - Snake game in javascript. <br />
              - Inventory CRUD in Laravel and PHP. <br />
              - Calculation of the footprint water in Javascript and PHP. <br />
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-3">
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
            <img
              src={logophp}
              alt="img logo php"
              className="logophp img-fluid"
            />
            <img
              src={logosql}
              alt="img logo sql"
              className="logosql img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="card card-body col-8 mt-4">
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

      <div className="card card-body col-8 mt-4 mb-4">
        <div className="row">
          <div className=" d-flex flex-column justify-content-start ">
            <h5>Skills</h5>
            <p>
              - Python | Tkinter
              <br />
              <br />
              <strong>FRONTEND</strong> <br />
              - HTML | CSS | JS
              <br />- Basic knowledge in React-DOM <br />
              <br />
              <strong>BACKEND</strong> <br />- PHP <br />
              <br />
              <strong>DATABASE</strong>
              <br />- Management in MySQL | SQL
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-3">
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
            <img
              src={logophp}
              alt="img logo php"
              className="logophp img-fluid"
            />
            <img
              src={logosql}
              alt="img logo sql"
              className="logosql img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
