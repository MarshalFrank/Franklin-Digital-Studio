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
        description: "A modern corporate website focused on brand authority.",
        tech: "React, Bootstrap, SEO"
    },
    {
        id: 2,
        title: "Startup Dashboard",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        description: "Analytics dashboard for startup founders.",
        tech: "Figma, React, Chart.js"
    },
    {
        id: 3,
        title: "E-commerce Platform",
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        description: "Scalable e-commerce platform with payments integration.",
        tech: "React, Node.js, MongoDB"
    },
    {
        id: 4,
        title: "NGO Impact Website",
        category: "Web",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        description: "Responsive website for a non-profit organisation.",
        tech: "WordPress, SEO"
    },
    {
        id: 5,
        title: "Marketing Landing Page",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
        description: "High-converting landing page for SaaS product.",
        tech: "React, A/B Testing"
    },
    {
        id: 6,
        title: "Booking System",
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
        description: "Online booking system with admin dashboard.",
        tech: "Node.js, SQL, React"
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