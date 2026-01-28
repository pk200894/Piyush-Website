// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
}

// Toggle Mobile Menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// Set default theme to dark
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'dark');
}

// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
// Auto-highlight active menu link
(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Highlight main nav links
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");

      // If link is inside dropdown, also highlight parent
      const dropdownParent = link.closest(".dropdown");
      if (dropdownParent) {
        dropdownParent.querySelector("a").classList.add("active");
      }
    }
  });
})();
