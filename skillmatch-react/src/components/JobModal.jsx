import { useEffect, useState } from 'react';
import { Building2, Globe, Sparkles, X } from 'lucide-react';

export default function JobModal({ job, isOpen, onClose }) {
  const [applyStatus, setApplyStatus] = useState('idle');
  const WorkIcon = job?.type === 'Remote' ? Globe : Building2;

  useEffect(() => {
    if (applyStatus === 'idle') return undefined;
    const timeout = window.setTimeout(() => {
      if (applyStatus === 'connecting') {
        setApplyStatus('sent');
      } else {
        onClose();
        setApplyStatus('idle');
      }
    }, applyStatus === 'connecting' ? 700 : 1200);
    return () => window.clearTimeout(timeout);
  }, [applyStatus, onClose]);

  if (!job) return null;

  const closeIfBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const applyStyle = applyStatus === 'sent'
    ? { backgroundColor: '#10B981', borderColor: '#10B981' }
    : undefined;

  return (
    <div
      className={`modal-backdrop${isOpen ? ' open' : ''}`}
      id="job-modal"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-modal-title"
      onClick={closeIfBackdrop}
    >
      <div className="modal-window">
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="match-score-pill score-highlight" id="modal-match-score">
              <Sparkles className="icon-xs" aria-hidden="true" />
              <span>{job.match}</span>
            </span>
            <span className="info-pill" id="modal-work-type">
              <WorkIcon className="icon-xs" aria-hidden="true" />
              <span>{job.type}</span>
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            id="modal-close-btn"
            aria-label="Tutup jendela modal"
            onClick={onClose}
          >
            <X className="icon-sm" aria-hidden="true" />
          </button>
        </div>
        <div className="modal-body">
          <h3 className="modal-job-title" id="job-modal-title">{job.title}</h3>
          <p className="modal-company-name">{job.company}</p>
          <p className="modal-salary">
            Estimasi Gaji: <strong>{job.salary}</strong>
          </p>
          <div className="modal-section">
            <h4 className="modal-section-title">Deskripsi Posisi</h4>
            <p className="modal-desc-text">{job.description}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">Kecocokan Skill Anda</h4>
            <div className="modal-skills-breakdown">
              {job.skills.map(({ name, percent }) => (
                <div className="skill-bar-row" key={name}>
                  <div className="skill-bar-info">
                    <span>{name}</span>
                    <span style={{ color: 'var(--primary-blue)' }}>{percent}% Cocok</span>
                  </div>
                  <div className="skill-bar-outer">
                    <div className="skill-bar-inner" style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">Tag Kategori</h4>
            <div className="modal-tags-wrap">
              {job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary close-modal-action"
            onClick={onClose}
          >
            Tutup
          </button>
          <button
            type="button"
            className="btn btn-primary"
            id="modal-apply-btn"
            disabled={applyStatus === 'connecting'}
            style={applyStyle}
            onClick={() => setApplyStatus('connecting')}
          >
            {applyStatus === 'connecting'
              ? 'Menghubungkan Portfolio...'
              : applyStatus === 'sent'
                ? 'Kandidat Cocok Terkirim!'
                : 'Lamar Posisi Ini'}
          </button>
        </div>
      </div>
    </div>
  );
}
