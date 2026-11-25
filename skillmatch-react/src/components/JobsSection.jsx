import { jobs } from '../data/content.js';
import JobCard from './JobCard.jsx';

export default function JobsSection({ onViewJob }) {
  return (
    <section className="recommended-jobs-section" id="jobs">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Rekomendasi Terkurasi</span>
          <h2 className="section-title">Peluang yang Mungkin Cocok Untukmu</h2>
          <p className="section-subtitle">
            Rekomendasi pekerjaan berdasarkan skill dan minatmu.
          </p>
        </div>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onViewJob={onViewJob} />
          ))}
        </div>
      </div>
    </section>
  );
}
