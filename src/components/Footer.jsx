function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">

        <div className="row">

          {/* Brand Column */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Franklin Digital Studio</h5>
            <p className="text-muted">
              We design and develop modern digital experiences
              that help businesses grow and stand out online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li><span className="footer-text">Web Design</span></li>
              <li><span className="footer-text">UI/UX Design</span></li>
              <li><span className="footer-text">Branding</span></li>
              <li><span className="footer-text">Analytics</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="footer-text">Hatfield, United Kingdom</p>
            <p className="footer-text">dikefranklin7197@gmail.com</p>
            <p className="footer-text">+44 7344 061372</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Franklin Digital Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;