/**
 * SkillMatch - Interactive Front-End Script
 * Modern, clean, responsive interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if loaded
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // ------------------------------------------------------------------------
  // 1. Sticky Navbar on Scroll
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation Toggle
  // ------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', String(!isExpanded));
    hamburgerBtn.classList.toggle('is-active');
    mobileDrawer.classList.toggle('open');
  };

  const closeMobileMenu = () => {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.classList.remove('is-active');
    mobileDrawer.classList.remove('open');
  };

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. Active Nav Link on Scroll (Intersection Observer)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  // ------------------------------------------------------------------------
  // 4. Modal Management (Job Details & Signup)
  // ------------------------------------------------------------------------
  const jobModal = document.getElementById('job-modal');
  const signupModal = document.getElementById('signup-modal');
  const viewJobButtons = document.querySelectorAll('.view-job-btn');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');
  const allModals = document.querySelectorAll('.modal-backdrop');

  const openModal = (modalEl) => {
    if (!modalEl) return;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modalEl) => {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Close buttons and outside click listeners
  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.close-modal-action') || e.target.closest('.modal-close-btn')) {
        closeModal(modal);
      }
    });
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allModals.forEach(m => {
        if (m.classList.contains('open')) closeModal(m);
      });
      closeMobileMenu();
    }
  });

  // Open Signup modal triggers
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeMobileMenu();
      openModal(signupModal);
    });
  });

  // Open Job Detail Modal
  viewJobButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title;
      const company = btn.dataset.company;
      const match = btn.dataset.match;
      const salary = btn.dataset.salary;
      const type = btn.dataset.type;
      const desc = btn.dataset.desc;
      const tags = btn.dataset.tags ? btn.dataset.tags.split(',') : [];
      const skills = btn.dataset.skills ? btn.dataset.skills.split(',') : [];

      // Update modal contents
      document.getElementById('modal-job-title').textContent = title;
      document.getElementById('modal-company-name').textContent = company;
      document.getElementById('modal-match-score').innerHTML = `<i data-lucide="sparkles" class="icon-xs"></i> <span>${match}</span>`;
      document.getElementById('modal-work-type').innerHTML = `<i data-lucide="${type === 'Remote' ? 'globe' : 'building-2'}" class="icon-xs"></i> <span>${type}</span>`;
      document.getElementById('modal-salary').innerHTML = `Estimasi Gaji: <strong>${salary}</strong>`;
      document.getElementById('modal-desc').textContent = desc;

      // Populate Skill Breakdown
      const skillsContainer = document.getElementById('modal-skills-breakdown');
      skillsContainer.innerHTML = '';
      skills.forEach(skillStr => {
        const trimmed = skillStr.trim();
        const matchPct = trimmed.match(/\((\d+)%\)/);
        const skillName = trimmed.replace(/\s*\(\d+%\)/, '');
        const pctValue = matchPct ? matchPct[1] : '85';

        const row = document.createElement('div');
        row.className = 'skill-bar-row';
        row.innerHTML = `
          <div class="skill-bar-info">
            <span>${skillName}</span>
            <span style="color: var(--primary-blue);">${pctValue}% Cocok</span>
          </div>
          <div class="skill-bar-outer">
            <div class="skill-bar-inner" style="width: ${pctValue}%;"></div>
          </div>
        `;
        skillsContainer.appendChild(row);
      });

      // Populate Tags
      const tagsContainer = document.getElementById('modal-tags');
      tagsContainer.innerHTML = '';
      tags.forEach(tagStr => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tagStr.trim();
        tagsContainer.appendChild(span);
      });

      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }

      openModal(jobModal);
    });
  });

  // Modal Apply action button
  const modalApplyBtn = document.getElementById('modal-apply-btn');
  if (modalApplyBtn) {
    modalApplyBtn.addEventListener('click', () => {
      modalApplyBtn.textContent = 'Menghubungkan Portfolio...';
      modalApplyBtn.disabled = true;

      setTimeout(() => {
        modalApplyBtn.textContent = 'Kandidat Cocok Terkirim!';
        modalApplyBtn.style.backgroundColor = '#10B981';
        modalApplyBtn.style.borderColor = '#10B981';

        setTimeout(() => {
          closeModal(jobModal);
          modalApplyBtn.textContent = 'Lamar Posisi Ini';
          modalApplyBtn.disabled = false;
          modalApplyBtn.style.backgroundColor = '';
          modalApplyBtn.style.borderColor = '';
        }, 1200);
      }, 700);
    });
  }

  // ------------------------------------------------------------------------
  // 5. Signup Quick Form Submission Handler
  // ------------------------------------------------------------------------
  const signupForm = document.getElementById('signup-form');
  const formFeedback = document.getElementById('form-feedback');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');

      if (!nameInput.value || !emailInput.value) return;

      const userName = nameInput.value.split(' ')[0] || 'Kawan';
      formFeedback.style.display = 'block';
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `Selamat datang, <strong>${userName}</strong>! Profilmu sedang disiapkan. Algoritma SkillMatch sedang menganalisis lowongan terbaik...`;

      nameInput.value = '';
      emailInput.value = '';

      setTimeout(() => {
        closeModal(signupModal);
        formFeedback.style.display = 'none';
      }, 2500);
    });
  }

  // ------------------------------------------------------------------------
  // 6. Footer About & Contact triggers
  // ------------------------------------------------------------------------
  const footerTriggers = document.querySelectorAll('.footer-info-trigger');
  footerTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const type = trigger.dataset.type;
      if (type === 'about') {
        alert("SkillMatch adalah proyek akademik UI/UX & Web Development yang dirancang untuk membantu para freelancer, visual designer, dan content creator menemukan pekerjaan terarah berdasarkan kecocokan skill nyata.");
      } else if (type === 'contact') {
        alert("Kontak Proyek Akademik SkillMatch:\nEmail: hello@skillmatch.id / tim-pengembang@kampus.ac.id\nProyek Portofolio & Riset UI/UX.");
      }
    });
  });
});
