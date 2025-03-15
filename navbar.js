// Menambahkan fungsi untuk menampilkan atau menyembunyikan navbar saat hamburger diklik
document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});