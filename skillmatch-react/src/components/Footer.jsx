export default function Footer() {
  const handleInfoClick = (event, type) => {
    event.preventDefault();
    if (type === 'about') {
      window.alert(
        'SkillMatch adalah proyek akademik UI/UX & Web Development yang dirancang untuk membantu para freelancer, visual designer, dan content creator menemukan pekerjaan terarah berdasarkan kecocokan skill nyata.',
      );
    } else {
      window.alert(
        'Kontak Proyek Akademik SkillMatch:\nEmail: hello@skillmatch.id / tim-pengembang@kampus.ac.id\nProyek Portofolio & Riset UI/UX.',
      );
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#hero" className="brand-logo footer-logo">
              <span className="logo-icon-wrapper">
                <svg
                  className="logo-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <span className="brand-name">
                Skill<span className="brand-highlight">Match</span>
              </span>
            </a>
            <p className="footer-desc">
              Temukan peluang kerja yang sesuai dengan skill dan portfolio-mu.
            </p>
          </div>
          <div className="footer-links-col">
            <h3 className="footer-col-title">Product</h3>
            <ul className="footer-link-list">
              <li><a href="#features">Fitur</a></li>
              <li><a href="#how-it-works">Cara Kerja</a></li>
              <li><a href="#jobs">Lowongan</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-link-list">
              <li>
                <a
                  href="#about"
                  className="footer-info-trigger"
                  onClick={(event) => handleInfoClick(event, 'about')}
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-info-trigger"
                  onClick={(event) => handleInfoClick(event, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright-text">&copy; 2026 SkillMatch. Project Kelompok 14.</p>
          <p className="academic-badge-text">UI/UX &amp; Web Development Project</p>
        </div>
      </div>
    </footer>
  );
}
