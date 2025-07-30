document.addEventListener("DOMContentLoaded", () => {
  const textoContacto = document.getElementById("texto-contacto");
  if (textoContacto) {
    textoContacto.innerHTML = `
      <p class="mt-3 fw-bold">
        Si querés ponerte en contacto con nosotros, podés completar el formulario o bien escribirnos directamente al siguiente correo:<br>
        <a href="mailto:silvia_mariella@yahoo.com" class="mail">silvia_mariella@yahoo.com</a><br>
        ¡Te responderemos lo antes posible!
      </p>
    `;
  }

  // Si solo querés validar, sin impedir el envío real:
  const form = document.getElementById("formContacto");
  const alerta = document.getElementById("alerta");

  if (form && alerta) {
    form.addEventListener("submit", function (e) {
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();

      if (!nombre || !email || !mensaje) {
        e.preventDefault(); // solo si está incompleto
        alerta.className = "alert alert-danger mt-3";
        alerta.textContent = "Por favor completá todos los campos.";
        alerta.classList.remove("d-none");
      }
    });
  }
});
