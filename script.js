function scrollToContact() {
  document.getElementById("contacto").scrollIntoView({
    behavior: "smooth"
  });
}

function mostrarMensaje() {
  alert("Gracias por confiar en nosotros 🚀");
}

/* Animación Reveal on Scroll */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
