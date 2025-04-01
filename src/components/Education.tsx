import logoIpss from "../assets/images/logo_ipss_web.png";

function EducationModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Something more
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Pedagogy in Physical Education and Health
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Universidad Central de Chile</h5>
              <p>2012-2017</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Education() {
  return (
    <div className="body-edu d-flex flex-column align-items-center mt-3">
      <button
        className="btn btn-primary col col-6 mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Education
      </button>

      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="row">
            <div className="col-4">
              <img className="logoIpss img-fluid" src={logoIpss} alt="Logo" />
            </div>
            <div className="col-8 d-flex flex-column justify-content-start">
              <h5>Technician in Programming and Systems Analysis</h5>
              <h5>Instituto Profesional San Sebastián</h5>
              <p>2022-2025</p>
            </div>
          </div>
        </div>
      </div>

      <EducationModal />
    </div>
  );
}

export default Education;
