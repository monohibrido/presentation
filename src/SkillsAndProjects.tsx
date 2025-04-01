function SkillsAndProjects() {
  return (
    <>
      <div>
        <h3 className="title-skill mt-5">Habilities</h3>
      </div>
      <div className="accordion mx-auto" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Project one
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h5>Key saving</h5>
              <p>
                Web application used to save keys from different websites, in
                order to keep them securely and not forget them, avoiding
                cumbersome processes.
              </p>

              <p>
                <strong>Programming languages</strong>
              </p>

              <p>
                - Frontend: React <br />
                - Backend: Node.Js and Express <br />- Manager and Database: SQL
                y PhpMyAdmin
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Project two
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h5>Item Inventory</h5>
              <p>Web application used to inventory items using a CRUD.</p>

              <p>
                <strong>Programming languages</strong>
              </p>

              <p>
                - Frontend: React <br />
                - Backend: Node.Js and Express <br />- Manager and Database: SQL
                y PhpMyAdmin
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="title-skill mt-5">Knowledge</h3>
      </div>
      <div className="accordion mx-auto" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Frontend
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                - Knowledge in HTML, CSS and JS <br />- Basic Knowledge in
                React-DOM.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Backend
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                - Knowledge in PHP. <br />- Basic Knowledge in Node.js.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Database
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                - Management in MySQL <br />- Queries in SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsAndProjects;
