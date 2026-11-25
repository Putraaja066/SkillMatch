import { problems } from '../data/content.js';

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Tantangan Karir Kreatif</span>
          <h2 className="section-title">Mencari pekerjaan yang tepat tidak harus sulit.</h2>
          <p className="section-subtitle">
            Banyak pencari kerja menghabiskan waktu memilah lowongan yang belum tentu sesuai
            dengan kemampuan mereka.
          </p>
        </div>
        <div className="problem-grid">
          {problems.map(({ icon: Icon, title, description }) => (
            <div className="problem-card" key={title}>
              <div className="problem-icon-wrap">
                <Icon className="feature-icon" aria-hidden="true" />
              </div>
              <h3 className="problem-card-title">{title}</h3>
              <p className="problem-card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
