const textoContacto = document.getElementById("texto-contacto");

textoContacto.innerHTML = `
  <p class="mt-3">
    Si querés ponerte en contacto con nosotros, podés completar el formulario o bien escribirnos directamente al siguiente correo:<br>
    <strong><a href="mailto:ejemplo@correo.com" class="mail">silvia_mariella@yahoo.com</a></strong><br>
    ¡Te responderemos lo antes posible!
  </p>
`;

const contenedor = document.getElementById("formulario-contacto");

contenedor.innerHTML = `
  <form id="contactoForm" class="p-4 border rounded bg-light">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" placeholder="Tu nombre" required>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com" required>
    </div>

    <div class="mb-3">
      <label for="telefono" class="form-label">Teléfono</label>
      <input type="tel" class="form-control" id="telefono" placeholder="Tu número de teléfono">
    </div>

    <div class="mb-3">
      <label for="mensaje" class="form-label">Mensaje</label>
      <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..." required></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
`;
