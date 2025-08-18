document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.getElementById('galeria');

  // Elementos del modal
  const modalEl = document.getElementById('modalLibro');
  const modalTitulo = document.getElementById('modalLibroLabel');
  const modalImagen = document.getElementById('modalImagen');
  const modalDescripcion = document.getElementById('modalDescripcion');
  const modalLink = document.getElementById('modalLink');

  // Asegura que el modal esté colgado directamente de <body>
  if (modalEl.parentElement !== document.body) {
    document.body.appendChild(modalEl);
  }

  // Instancia robusta del modal (evita doble data-API / problemas de cierre)
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
      libros.forEach(libro => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${libro.imagen}" class="card-img-top" alt="Portada de ${libro.titulo}">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5 class="card-title">${libro.titulo}</h5>
              <div class="mt-auto btn">
                <button type="button" class="btn m-2 btn-custom" data-action="desc">Descripción</button>
                <a class="btn m-2 btn-custom" data-action="buy" href="${libro.link}" target="_blank" rel="noopener">Adquirir</a>
              </div>
            </div>
          </div>
        `;

        // Abrir modal y cargar contenido (sin innerHTML)
        col.querySelector('[data-action="desc"]').addEventListener('click', () => {
          modalTitulo.textContent = libro.titulo || '';
          modalImagen.src = libro.imagen || '';
          modalImagen.alt = `Portada del libro ${libro.titulo || ''}`;
          modalDescripcion.textContent = libro.descripcion || '';
          modalLink.href = libro.link || '#';
          modal.show();
        });

        galeria.appendChild(col);
      });
    })
    .catch(err => {
      galeria.innerHTML = `<p class="text-danger text-center">Error cargando libros: ${err.message}</p>`;
    });

  // Limpia imagen al cerrar (evita layout raro en re-aperturas muy largas)
  modalEl.addEventListener('hidden.bs.modal', () => {
    modalImagen.src = '';
  });
});
