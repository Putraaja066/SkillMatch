import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function SignupModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('photographer');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!feedback) return undefined;
    const timeout = window.setTimeout(() => {
      setFeedback('');
      onClose();
    }, 2500);
    return () => window.clearTimeout(timeout);
  }, [feedback, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const firstName = name.trim().split(/\s+/)[0] || 'Kawan';
    setFeedback(firstName);
    setName('');
    setEmail('');
  };

  const closeIfBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className={`modal-backdrop${isOpen ? ' open' : ''}`}
      id="signup-modal"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-modal-title"
      onClick={closeIfBackdrop}
    >
      <div className="modal-window modal-narrow">
        <div className="modal-header">
          <div className="brand-logo modal-logo">
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
          </div>
          <button
            type="button"
            className="modal-close-btn"
            id="signup-close-btn"
            aria-label="Tutup jendela"
            onClick={onClose}
          >
            <X className="icon-sm" aria-hidden="true" />
          </button>
        </div>
        <div className="modal-body">
          <h3 className="modal-job-title" id="signup-modal-title">
            Mulai Perjalanan Karirmu
          </h3>
          <p className="modal-desc-text">
            Bergabunglah dengan ribuan talenta kreatif yang telah menemukan pekerjaan sesuai
            skill dan portfolio mereka.
          </p>
          <form className="signup-quick-form" id="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="form-name" className="form-label">Nama Lengkap</label>
              <input
                type="text"
                id="form-name"
                className="form-control"
                placeholder="Contoh: Lukman Pratama"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-role" className="form-label">Bidang Keahlian Utama</label>
              <select
                id="form-role"
                className="form-control"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="photographer">Photographer / Visual Creator</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="graphic">Graphic &amp; Brand Designer</option>
                <option value="content">Content Creator</option>
                <option value="other">Keahlian Kreatif Lainnya</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="form-email" className="form-label">Alamat Email</label>
              <input
                type="email"
                id="form-email"
                className="form-control"
                placeholder="nama@email.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {feedback && (
              <div className="form-feedback success" id="form-feedback" role="status">
                Selamat datang, <strong>{feedback}</strong>! Profilmu sedang disiapkan.
                Algoritma SkillMatch sedang menganalisis lowongan terbaik...
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-full" id="submit-signup-btn">
              Buat Profil &amp; Temukan Match
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
