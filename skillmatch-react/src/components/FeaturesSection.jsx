import { features } from '../data/content.js';

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Solusi Terpadu</span>
          <h2 className="section-title">
            Semua yang kamu butuhkan untuk menemukan pekerjaan yang tepat.
          </h2>
          <p className="section-subtitle">
            SkillMatch membantu menyederhanakan proses pencarian kerja dari awal hingga
            menemukan peluang yang sesuai.
          </p>
        </div>
        <div className="features-grid">
          {features.map(({ icon: Icon, chip, title, description, previews }) => (
            <div className="feature-card" key={title}>
              <div className="feature-header">
                <div className="feature-icon-box">
                  <Icon className="feature-icon" aria-hidden="true" />
                </div>
                <span className="feature-chip">{chip}</span>
              </div>
              <h3 className="feature-card-title">{title}</h3>
              <p className="feature-card-desc">{description}</p>
              <div className="feature-meta-preview">
                {previews.map(({ icon: PreviewIcon, className, text }) => (
                  <span className={className} key={text}>
                    <PreviewIcon className="icon-micro" aria-hidden="true" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
