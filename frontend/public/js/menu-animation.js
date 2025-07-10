export function toggleSidebar() {
  const boton = document.getElementById("toggleMenu");

  if (!boton) {
    console.warn("Botón del menú no encontrado");
    return;
  }

  boton.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
    console.log("Menú colapsado/expandido");
  });
}

