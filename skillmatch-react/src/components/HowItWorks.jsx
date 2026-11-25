import { steps } from '../data/content.js';

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Alur Sederhana</span>
          <h2 className="section-title">Mulai menemukan peluang dalam 3 langkah.</h2>
          <p className="section-subtitle">
            Hanya butuh beberapa menit untuk menyinkronkan keahlianmu dengan peluang kerja
            terbaik.
          </p>
        </div>
        <div className="steps-wrapper">
          <div className="step-connector-line" aria-hidden="true"></div>
          <div className="steps-grid">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div className="step-card" key={number}>
                <div className="step-badge-number">{number}</div>
                <div className="step-icon-circle">
                  <Icon className="step-icon" aria-hidden="true" />
                </div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
