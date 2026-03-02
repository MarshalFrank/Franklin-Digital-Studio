import { useState, useEffect } from "react";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioModal from "../components/PortfolioModal";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Corporate Website",
      category: "Web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      description: "A modern corporate website designed for brand authority and lead generation.",
      tech: "React, Bootstrap, SEO"
    },
    {
      id: 2,
      title: "Startup Dashboard",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      description: "A clean and intuitive analytics dashboard for startup founders.",
      tech: "Figma, React, Chart.js"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      description: "A scalable e-commerce platform with integrated payment system.",
      tech: "React, Node.js, MongoDB"
    }
  ];

  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
    
  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
        setSelectedProject(null);
        }
    };

    if (selectedProject) {
        document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
    }, [selectedProject]);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Portfolio</h1>
        <p className="text-muted">
          Explore some of our recent digital projects.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="text-center mb-4">
        {["All", "Web", "UI/UX", "Full Stack"].map((category) => (
          <button
            key={category}
            className={`filter-btn me-2 mb-2 ${
              filter === category ? "filter-active" : "filter-inactive"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
            {filteredProjects.map((project) => (
                <div key={project.id} className="col-md-4">
                <PortfolioCard
                    project={project}
                    onSelect={setSelectedProject}
                />
                </div>
            ))}
        </div>

      {/* Modal */}
        <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        />
    </section>
  );
}

export default Portfolio;