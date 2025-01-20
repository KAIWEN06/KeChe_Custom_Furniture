const menuIcon = document.getElementById("List-Menu-icon");
const menuList = document.getElementById("menu-navbar");

menuIcon.addEventListener("click", () =>{
 menuList.classList.toggle("hidden");
});