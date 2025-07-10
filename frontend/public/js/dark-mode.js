export function activarModoOscuro() {
  const boton = document.getElementById("toggleMode");

  if (!boton) {
    console.warn("Botón de modo oscuro no encontrado");
    return;
  }

  boton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = boton.querySelector("i");
    icon.classList.toggle("bi-moon-stars-fill");
    icon.classList.toggle("bi-sun-fill");

    console.log("Modo oscuro activado/desactivado");
  });
}

