import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container-fluid text-white py-5" style={{background: "linear-gradient(135deg, #111827, #1e3a8a)", paddingTop: "160px", paddingBottom: "140px"}}>
        <div className="container text-center py-5" data-aos="fade-up">
          <h1 className="display-3 fw-bold">
            We Build Modern Digital Experiences
          </h1>
          <p className="lead mt-4">
            Web design, branding and analytics solutions for growing businesses
            and startups.
          </p>

          <div className="mt-4">
            <button className="cta-primary btn-lg me-3">
                Get Started
            </button>
            <Link to="/portfolio" className="btn btn-outline-light btn-lg">
                View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="container-fluid bg-white">
        <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            We provide end-to-end digital solutions.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow-sm h-100 p-4">
              <h5 className="fw-bold">Web Design</h5>
              <p>
                Responsive and modern websites tailored to your brand identity.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow-sm h-100 p-4">
              <h5 className="fw-bold">Branding</h5>
              <p>
                Visual identity design that makes your business stand out.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow-sm h-100 p-4">
              <h5 className="fw-bold">Analytics</h5>
              <p>
                Data-driven insights to optimise growth and performance.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
    <section className="container-fluid bg-light py-5">
    <div className="container">

        <div className="text-center mb-5">
        <h2 className="fw-bold">Our Recent Work</h2>
        <p className="text-muted">
            A selection of projects we’ve designed and developed.
        </p>
        </div>

        <div className="row g-4">

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-card">
            <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d" 
                alt="Corporate website project"
                className="img-fluid"
            />
            <div className="portfolio-overlay">
                <h5>Corporate Website</h5>
                <p>Web Design</p>
            </div>
            </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="portfolio-card">
            <img 
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" 
                alt="Startup dashboard project"
                className="img-fluid"
            />
            <div className="portfolio-overlay">
                <h5>Startup Dashboard</h5>
                <p>UI/UX Design</p>
            </div>
            </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="portfolio-card">
            <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d" 
                alt="E-commerce platform project"
                className="img-fluid"
            />
            <div className="portfolio-overlay">
                <h5>E-commerce Platform</h5>
                <p>Full Stack Development</p>
            </div>
            </div>
        </div>

        </div>

    </div>
    </section>
    
    {/* Call To Action Section */}
    <section 
    className="container-fluid text-white text-center"
    style={{
        background: "linear-gradient(135deg, #1e3a8a, #111827)",
        paddingTop: "100px",
        paddingBottom: "100px"
    }}
    >
    <div className="container" data-aos="fade-up">
        <h2 className="fw-bold display-5">
        Ready to Elevate Your Digital Presence?
        </h2>

        <p className="lead mt-3">
        Let’s build something exceptional together.
        </p>

        <div className="mt-4">
        <button className="cta-primary btn-lg">
            Start Your Project
        </button>
        </div>
    </div>
    </section>
    </>
  );
}

export default Home;