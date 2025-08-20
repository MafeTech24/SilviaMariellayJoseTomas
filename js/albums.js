fetch("../baseDeDatos/albums.json")
  .then(response => response.json())
  .then(data => {
    let incompletos = data.slice(0, 16); // solo portadas
    let completos = data.slice(-3);      // últimos con canciones
    
    let contenedorIncompletos = document.querySelector("#album-list");
    let contenedorCompletos = document.querySelector("#album-list-completos");

    // Renderizar incompletos
    incompletos.forEach(album => {
      let card = document.createElement("div");
      card.className = "col-md-3 mb-4";
      card.innerHTML = `
        <div class="album-card">
          <img src="${album.portada}" class="album-cover" alt="${album.titulo}">
          <div class="album-title text-center">${album.titulo}</div>
        </div>
      `;
      contenedorIncompletos.appendChild(card);
    });

    // Renderizar completos con canciones
    completos.forEach(album => {
      let card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="album-card">
          <img src="${album.portada}" class="album-cover" alt="${album.titulo}">
          <div class="album-title">${album.titulo}</div>
          <div class="album-year">${album.anio || "Año no disponible"}</div>
          <ul class="tracklist">
            ${album.canciones.map(c => `
              <li><a href="${c.url}" target="_blank" rel="noopener noreferrer">${c.nombre}</a></li>
            `).join("")}
          </ul>
        </div>
      `;
      contenedorCompletos.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando el JSON:", error));
