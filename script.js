document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for contact button (unchanged)
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (btn.getAttribute('href') === '#contact') {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form (unchanged)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
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

  /*** Improved CUSTOM DROPDOWN LOGIC ***/
  function closeAllDropdowns() {
    document.querySelectorAll('.custom-dropdown').forEach(drop => {
      drop.classList.remove('active');
      if (drop.querySelector('.tooltip')) {
        drop.querySelector('.tooltip').classList.remove('visible');
      }
    });
  }

  document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');
    const list = dropdown.querySelector('.dropdown-list');
    const tooltip = dropdown.querySelector('.tooltip');

    // Open/close dropdown logic
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close all dropdowns but this one
      document.querySelectorAll('.custom-dropdown').forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
          if (other.querySelector('.tooltip')) {
            other.querySelector('.tooltip').classList.remove('visible');
          }
        }
      });
      dropdown.classList.toggle('active');
      // Hide tooltip when opening
      tooltip.classList.remove('visible');
    });

    // Tooltip logic for each option
    Array.from(list.querySelectorAll('li')).forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        tooltip.textContent = item.dataset.desc || '';
        tooltip.classList.add('visible');
        // Position tooltip vertically to hovered li
        // Account for dropdown scroll position
        const parentRect = dropdown.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const top = item.offsetTop - list.scrollTop;
        tooltip.style.top = `${top}px`;
        tooltip.style.left = '105%';
      });
      item.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
      });
      item.addEventListener('click', (e) => {
        header.textContent = item.textContent + " ▾";
        dropdown.classList.remove('active');
        tooltip.classList.remove('visible');
      });
    });
  });

  // Global close
  document.addEventListener('click', () => closeAllDropdowns());
});
