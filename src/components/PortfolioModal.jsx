function PortfolioModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid mb-3"
              style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
            />
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button className="cta-primary">
              Visit Project
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;