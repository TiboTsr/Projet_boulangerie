// Menu déroulant
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');

  if (menuToggle && menu) {
      // Gère le clic sur le bouton de menu
      menuToggle.addEventListener('click', function () {
          menu.classList.toggle('show');
      });
  }

  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  if (links.length > 0) {
      for (const link of links) {
          link.addEventListener('click', function (e) {
              e.preventDefault();
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: 'smooth',
                  });
              }
          });
      }
  }
});
