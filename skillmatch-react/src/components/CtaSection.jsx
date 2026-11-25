import { Shield } from 'lucide-react';

export default function CtaSection({ onOpenSignup }) {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-decorative-glow" aria-hidden="true"></div>
      <div className="container cta-container">
        <div className="cta-inner">
          <h2 className="cta-title">Siap menemukan pekerjaan yang lebih cocok?</h2>
          <p className="cta-subtitle">
            Mulai perjalanan kariermu dan temukan peluang yang sesuai dengan skill-mu.
          </p>
          <div className="cta-button-wrap">
            <button
              type="button"
              className="btn btn-white-primary btn-xl open-modal-btn"
              id="cta-start-btn"
              onClick={onOpenSignup}
            >
              Mulai Sekarang
            </button>
          </div>
          <p className="cta-note">
            <Shield className="icon-xs" aria-hidden="true" /> Gratis untuk pencari kerja &bull;
            Tanpa biaya pendaftaran
          </p>
        </div>
      </div>
    </section>
  );
}
