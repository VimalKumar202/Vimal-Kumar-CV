// Example script for scroll animation or theme toggle (can expand later)

  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const icon = menuToggle.querySelector("i");
  const navLinks = document.querySelectorAll(".navbar a");

  // Toggle menu open/close
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // toggle between bars and X
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active class from all
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projects.forEach(project => {
      if (filter === "all" || project.getAttribute("data-category") === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
function showCert(src) {
        document.getElementById("certImage").src = src;
        document.getElementById("certModal").style.display = "block";
    }
    function closeCert() {
        document.getElementById("certModal").style.display = "none";
    }


function showProjectImage(imgSrc) {
    const popup = document.createElement("div");
    popup.classList.add("image-popup");

    const img = document.createElement("img");
    img.src = imgSrc;

    popup.appendChild(img);
    document.body.appendChild(popup);

    popup.style.display = "flex";

    // Close popup when clicked anywhere
    popup.addEventListener("click", () => {
        popup.remove();
    });
}
