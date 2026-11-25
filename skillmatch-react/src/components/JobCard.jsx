import { BadgeDollarSign, Building2, Globe, Sparkles } from 'lucide-react';

export default function JobCard({ job, onViewJob }) {
  const WorkIcon = job.type === 'Remote' ? Globe : Building2;

  return (
    <article className="job-card" data-job={job.id}>
      <div className="job-card-header">
        <div className={`company-avatar-box ${job.avatarClass}`}>{job.initials}</div>
        <div className="company-details">
          <h3 className="job-title">{job.title}</h3>
          <span className="company-name">{job.company}</span>
        </div>
      </div>
      <div className="job-match-badge-wrap">
        <div className="match-score-pill score-highlight">
          <Sparkles className="icon-xs" aria-hidden="true" />
          <span className="score-text">{job.match}</span>
        </div>
        <span className="match-clarification">{job.matchNote}</span>
      </div>
      <div className="job-tags-list">
        {job.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="job-info-row">
        <div className="info-pill">
          <WorkIcon className="icon-xs" aria-hidden="true" />
          <span>{job.type}</span>
        </div>
        <div className="info-pill">
          <BadgeDollarSign className="icon-xs" aria-hidden="true" />
          <span className="salary-text">{job.salary}</span>
        </div>
      </div>
      <div className="job-card-action">
        <button
          type="button"
          className="btn btn-outline-primary btn-full view-job-btn"
          onClick={() => onViewJob(job)}
        >
          Lihat Lowongan
        </button>
      </div>
    </article>
  );
}
