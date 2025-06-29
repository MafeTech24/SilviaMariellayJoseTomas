const galeria = document.getElementById('galeria');
    const modal = new bootstrap.Modal(document.getElementById('modalLibro'));
    const modalTitulo = document.getElementById('modalLibroLabel');
    const modalImagen = document.getElementById('modalImagen');
    const modalDescripcion = document.getElementById('modalDescripcion');

    // Cargar el archivo JSON externo
    fetch('../baseDeDatos/portadaLibros.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo libros.json');
        }
        return response.json();
      })
      .then(libros => {
        libros.forEach(libro => {
          const col = document.createElement('div');
          col.className = 'col';

          col.innerHTML = `
            <div class="card h-100 shadow-sm" role="button">
              <img src="${libro.imagen}" class="card-img-top" alt="Portada de ${libro.titulo}">
              <div class="card-body">
                <h5 class="card-title">${libro.titulo}</h5>
              </div>
            </div>
          `;

          col.querySelector('.card').addEventListener('click', () => {
            modalTitulo.textContent = libro.titulo;
            modalImagen.src = libro.imagen;
            modalDescripcion.textContent = libro.descripcion;
            modal.show();
          });

          galeria.appendChild(col);
        });
      })
      .catch(error => {
        galeria.innerHTML = `<p class="text-danger text-center">Error cargando libros: ${error.message}</p>`;
      });