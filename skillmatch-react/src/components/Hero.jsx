import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Smart Career Matching</span>
          </div>
          <h1 className="hero-title">
            Temukan Pekerjaan yang Sesuai dengan{' '}
            <span className="text-accent">Skill-mu.</span>
          </h1>
          <p className="hero-description">
            SkillMatch membantu kamu menemukan peluang kerja yang relevan berdasarkan skill,
            pengalaman, dan portfolio.
          </p>
          <div className="hero-actions">
            <a href="#jobs" className="btn btn-primary btn-lg" id="hero-find-job-btn">
              <span>Cari Pekerjaan</span>
              <ArrowRight className="icon-sm" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="btn btn-secondary btn-lg"
              id="hero-how-it-works-btn"
            >
              <span>Lihat Cara Kerja</span>
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars">
              <span className="avatar-pill av-1" title="Lukman (Photographer/Creator)">LK</span>
              <span className="avatar-pill av-2" title="Sarah (UI/UX Designer)">SR</span>
              <span className="avatar-pill av-3" title="Dimas (Motion Designer)">DM</span>
            </div>
            <div className="trust-text">
              <strong>94% akurasi kecocokan</strong> untuk freelancer &amp; creative professional
            </div>
          </div>
        </div>

        <div className="hero-mockup-wrapper">
          <div className="mockup-card">
            <div className="mockup-header">
              <div className="mockup-header-title">
                <span className="mockup-sparkle-icon">
                  <Sparkles className="icon-xs" aria-hidden="true" />
                </span>
                <span className="mockup-title-text">Recommended For You</span>
              </div>
              <span className="mockup-badge">Live Match</span>
            </div>
            <div className="mockup-filter-row">
              <span className="mockup-tab active">Semua</span>
              <span className="mockup-tab">Desain</span>
              <span className="mockup-tab">Konten</span>
            </div>

            <div className="mockup-job-card featured">
              <div className="mockup-job-top">
                <div className="company-brand">
                  <div className="company-logo-avatar bg-indigo">CS</div>
                  <div>
                    <h2 className="mockup-job-role">UI/UX Designer</h2>
                    <p className="mockup-company-name">Creative Studio</p>
                  </div>
                </div>
                <div className="match-score-pill score-high">
                  <CheckCircle2 className="icon-xs" aria-hidden="true" />
                  <span>92% Match</span>
                </div>
              </div>
              <div className="mockup-tags">
                <span className="tag">Figma</span>
                <span className="tag">UI Design</span>
                <span className="tag">UX Research</span>
              </div>
              <div className="mockup-job-footer">
                <span className="meta-item">
                  <MapPin className="icon-xs" aria-hidden="true" /> Remote
                </span>
                <span className="meta-item">
                  <Wallet className="icon-xs" aria-hidden="true" /> Rp 6–8 jt
                </span>
              </div>
            </div>

            <div className="mockup-job-card">
              <div className="mockup-job-top">
                <div className="company-brand">
                  <div className="company-logo-avatar bg-blue">PC</div>
                  <div>
                    <h2 className="mockup-job-role">Visual Designer</h2>
                    <p className="mockup-company-name">Pixel Creative</p>
                  </div>
                </div>
                <div className="match-score-pill score-medium">
                  <CheckCircle2 className="icon-xs" aria-hidden="true" />
                  <span>87% Match</span>
                </div>
              </div>
              <div className="mockup-tags">
                <span className="tag">Branding</span>
                <span className="tag">Illustrator</span>
                <span className="tag">Visual Design</span>
              </div>
              <div className="mockup-job-footer">
                <span className="meta-item">
                  <Briefcase className="icon-xs" aria-hidden="true" /> Hybrid
                </span>
                <span className="meta-item">
                  <Wallet className="icon-xs" aria-hidden="true" /> Rp 5–7 jt
                </span>
              </div>
            </div>

            <div className="floating-stat-badge">
              <div className="stat-icon">
                <ShieldCheck className="icon-sm" aria-hidden="true" />
              </div>
              <div className="stat-content">
                <span className="stat-label">Portfolio Verified</span>
                <span className="stat-val">3 Karya Terhubung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
