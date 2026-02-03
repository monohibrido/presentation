import logogoogle from "../src/images/gwa.jpg";
import logogooglefund from "../src/images/gwf.jpg";
import "./Experience.css";

function Experience() {
  return (
    <div id="experience" className="container mt-5">
      <h1>Experience</h1>
      <div className="card card-body mt-4">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-start">
            <h5>IT technical support</h5>
            <h6>2022 - January 2026</h6>
            <p>
              - Management and maintenance of CMS website Wordpress. <br />
              - Resolution of technical problems and customer service. <br />-
              Admin Google WorkSpace.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center gap-3">
            <img
              src={logogoogle}
              alt="img google workspace"
              className="logogoogle img-fluid"
            />
            <img
              src={logogooglefund}
              alt="img google workspace"
              className="logogooglefund img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
