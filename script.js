document.addEventListener('DOMContentLoaded', () => {
  // ===== Smooth scrolling with offset for navigation links =====
  const HEADER_HEIGHT = 90; // Adjust to your header height in px

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate scroll position accounting for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - HEADER_HEIGHT;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        // Update URL hash without jump
        history.replaceState(null, null, '#' + targetId);
      }
      // Close mobile nav if open
      closeMobileMenu();
    });
  });

  // ===== Mobile hamburger menu toggle =====
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile nav when clicking on a nav link
  navLinks.querySelectorAll('a').forEach(navLink => {
    navLink.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  function closeMobileMenu() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  }

  // ===== Contact form submission (unchanged) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };
      const status = document.getElementById('formStatus');
      status.textContent = "Sending...";
      try {
        const res = await fetch('http://localhost:8080/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          status.textContent = "Message sent!";
          this.reset();
        } else {
          status.textContent = "Message failed. Try again.";
        }
      } catch (err) {
        status.textContent = "Message failed. Try again.";
      }
    });
  }

  // ===== Custom dropdowns with tooltip =====
  function closeAllDropdowns() {
    document.querySelectorAll('.custom-dropdown').forEach(drop => {
      drop.classList.remove('active');
      const tooltip = drop.querySelector('.tooltip');
      if (tooltip) {
        tooltip.classList.remove('visible');
      }
    });
  }

  document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');
    const list = dropdown.querySelector('.dropdown-list');
    const tooltip = dropdown.querySelector('.tooltip');

    header.addEventListener('click', e => {
      e.stopPropagation();
      const isActive = dropdown.classList.contains('active');
      closeAllDropdowns();
      if (!isActive) {
        dropdown.classList.add('active');
      }
    });

    Array.from(list.children).forEach(item => {
      item.addEventListener('mouseenter', () => {
        tooltip.textContent = item.dataset.desc || '';
        const listRect = list.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const offsetY = itemRect.top - listRect.top + list.scrollTop - 5;
        tooltip.style.top = offsetY + 'px';
        tooltip.style.left = '105%';
        tooltip.classList.add('visible');
      });

      item.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
      });

      item.addEventListener('click', () => {
        header.textContent = item.textContent + " ▾";
        dropdown.classList.remove('active');
        tooltip.classList.remove('visible');
      });
    });
  });

  document.addEventListener('click', closeAllDropdowns);
});
