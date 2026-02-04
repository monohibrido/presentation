import cvPreview from "../src/images/logo_pdf.png";
import cvFile from "../src/docs/cv2026.pdf";

function CVModal() {
  return (
    <div className="modal fade" id="cvModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Curriculum Vitae</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <img
              src={cvPreview}
              alt="Vista previa CV"
              className="img-fluid mb-3"
              style={{ width: "150px" }}
            />
            <a
              href={cvFile}
              download="Cristian_CV.pdf"
              className="btn btn-success"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVModal;
