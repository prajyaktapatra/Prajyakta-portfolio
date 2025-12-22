const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
function openCertificate() {
  document.getElementById("certificateModal").classList.remove("hidden");
  document.getElementById("certificateModal").classList.add("flex");
}

function closeCertificate() {
  document.getElementById("certificateModal").classList.add("hidden");
}