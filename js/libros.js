document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.getElementById('galeria');

  // Elementos del modal
  const modalEl = document.getElementById('modalLibro');
  const modalTitulo = document.getElementById('modalLibroLabel');
  const modalImagen = document.getElementById('modalImagen');
  const modalDescripcion = document.getElementById('modalDescripcion');
  const modalLink = document.getElementById('modalLink');
  const modalFooter = modalLink.closest('.modal-footer'); // footer completo

  // Asegura que el modal esté colgado directamente de <body>
  if (modalEl.parentElement !== document.body) {
    document.body.appendChild(modalEl);
  }

  // Instancia robusta del modal
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl, {
    backdrop: true,
    keyboard: true,
    focus: true
  });

  // Cargar JSON
  fetch('../baseDeDatos/portadaLibros.json')
    .then(res => {
      if (!res.ok) throw new Error('No se pudo cargar portadaLibros.json');
      return res.json();
    })
    .then(libros => {
      libros.forEach((libro, index) => {
        const col = document.createElement('div');
        col.className = 'col';

        // Botón "Adquirir": visible solo en los 3 primeros, invisible en el resto
        const botonAdquirir = (index < 3)
          ? `<a class="btn m-2 btn-custom" data-action="buy" href="${libro.link}" target="_blank" rel="noopener">Adquirir</a>`
          : `<a class="btn m-2 btn-custom invisible" tabindex="-1" aria-hidden="true">Adquirir</a>`;

        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${libro.imagen}" class="card-img-top" alt="Portada de ${libro.titulo}">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5 class="card-title">${libro.titulo}</h5>
              <div class="mt-auto btn">
                <button type="button" class="btn m-2 btn-custom" data-action="desc">Descripción</button>
                ${botonAdquirir}
              </div>
            </div>
          </div>
        `;

        // Abrir modal y cargar contenido
        col.querySelector('[data-action="desc"]').addEventListener('click', () => {
          modalTitulo.textContent = libro.titulo || '';
          modalImagen.src = libro.imagen || '';
          modalImagen.alt = `Portada del libro ${libro.titulo || ''}`;
          modalDescripcion.textContent = libro.descripcion || '';

          if (index < 3 && libro.link) {
            modalLink.href = libro.link;
            modalFooter.style.display = "flex"; // mostrar footer con botón
          } else {
            modalLink.href = "#";
            modalFooter.style.display = "none"; // ocultar footer completo
          }

          modal.show();
        });

        galeria.appendChild(col);
      });
    })
    .catch(err => {
      galeria.innerHTML = `<p class="text-danger text-center">Error cargando libros: ${err.message}</p>`;
    });

  // Limpia imagen al cerrar
  modalEl.addEventListener('hidden.bs.modal', () => {
    modalImagen.src = '';
  });
});
