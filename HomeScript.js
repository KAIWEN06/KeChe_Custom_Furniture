document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Back to Top Button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("heroVideo");
  let lastScrollTop = 0;

  // Handle scroll event
  window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Jika scroll ke bawah dan video masih dalam viewport
    if (scrollTop > lastScrollTop) {
      video.muted = true;
    } else if (scrollTop === 0) {
      // Jika scroll ke atas dan kembali ke top
      video.muted = false;
    }

    lastScrollTop = scrollTop;
  });
});

window.addEventListener("load", function() {
  document.getElementById("preloader").style.display = "none";
});
