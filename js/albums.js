const albumList = document.getElementById("album-list");

fetch('../baseDeDatos/albums.json')
  .then(response => {
    if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');
    return response.json();
  })
  .then(albums => {
    const albumList = document.getElementById('album-list');
    albums.forEach(album => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';

      col.innerHTML = `
  <div class="album-card">
    <img src="${album.portada}" alt="${album.titulo}" class="album-cover">
    <div class="album-title">
      <a href="${album.url}" target="_blank" rel="noopener noreferrer">${album.titulo}</a>
    </div>
    <div class="album-year">${album.anio}</div>
    <ul class="tracklist">
      ${album.canciones.map(c => `
        <li><a href="${album.url}" target="_blank" rel="noopener noreferrer">${c.nombre}</a></li>
      `).join('')}
    </ul>
  </div>
`;



      albumList.appendChild(col);
    });
  })
  .catch(error => {
    console.error('Error cargando albums.json:', error);
  });
