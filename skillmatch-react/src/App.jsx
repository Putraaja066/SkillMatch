import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import JobsSection from './components/JobsSection.jsx';
import CtaSection from './components/CtaSection.jsx';
import Footer from './components/Footer.jsx';
import JobModal from './components/JobModal.jsx';
import SignupModal from './components/SignupModal.jsx';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveModal(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSignup = () => setActiveModal('signup');
  const openJob = (job) => {
    setSelectedJob(job);
    setActiveModal('job');
  };
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar onOpenSignup={openSignup} />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <JobsSection onViewJob={openJob} />
        <CtaSection onOpenSignup={openSignup} />
      </main>
      <Footer />
      <JobModal
        key={`${activeModal === 'job' ? 'open' : 'closed'}-${selectedJob?.id ?? ''}`}
        job={selectedJob}
        isOpen={activeModal === 'job'}
        onClose={closeModal}
      />
      <SignupModal
        key={activeModal === 'signup' ? 'open' : 'closed'}
        isOpen={activeModal === 'signup'}
        onClose={closeModal}
      />
    </>
  );
}
