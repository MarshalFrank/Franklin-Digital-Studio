function PortfolioCard({ project, onSelect }) {
  return (
    <div
      className="portfolio-card"
      onClick={() => onSelect(project)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="img-fluid"
      />
      <div className="portfolio-overlay">
        <h5>{project.title}</h5>
        <p>{project.category}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;