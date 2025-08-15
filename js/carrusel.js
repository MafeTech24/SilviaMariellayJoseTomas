document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.getElementById("carousel-inner");
  const trigger = document.getElementById("versiculoTrigger");
  const popup = document.getElementById("carouselPopup");
  const closeButton = popup.querySelector(".btn-close");

  // Cargar datos desde JSON
  fetch("./baseDeDatos/data.json") // Ajusta la ruta si es necesario
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(productos => {
      productos.forEach((producto, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        item.innerHTML = `
          <img src="${producto.img}" class="d-block w-100" alt="${producto.pais}">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h6>
              <img src="${producto.bandera}" alt="${producto.pais}" 
                   style="vertical-align:middle; margin-right:6px;">
              ${producto.pais}
            </h6>
          </div>
        `;

        carouselInner.appendChild(item);
      });
    })
    .catch(err => console.error("Error cargando JSON:", err));

  // Abrir popup
  trigger.addEventListener("click", (e) => {
    popup.classList.add("active");
    e.stopPropagation();
  });

  // Cerrar popup con X
  closeButton.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // Cerrar popup haciendo click afuera
  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== trigger) {
      popup.classList.remove("active");
    }
  });
});

const versiculo = document.getElementById('versiculoTrigger');

// Detectar si es móvil
if (window.matchMedia("(max-width: 768px)").matches) {
  versiculo.addEventListener('click', () => {
    versiculo.classList.toggle('activo');
  });
}