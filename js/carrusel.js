const productos = [
  {
    id: 1,
    nombre: "Argentina",
    descripcion: "Visita a Argentina",
    img: "../assets/paises/argentina.webp"
  },
  {
    id: 2,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    img: "https://via.placeholder.com/800x400?text=Producto+B"
  },
  {
    id: 3,
    nombre: "Producto C",
    descripcion: "Descripción del producto C",
    img: "https://via.placeholder.com/800x400?text=Producto+C"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.getElementById("carousel-inner");

  productos.forEach((producto, index) => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (index === 0) item.classList.add("active");

    item.innerHTML = `
      <img src="${producto.img}" class="d-block w-100" alt="${producto.nombre}">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
        <h6>${producto.nombre}</h6>
        <p>${producto.descripcion}</p>
      </div>
    `;

    carouselInner.appendChild(item);
  });

  const trigger = document.getElementById("versiculoTrigger");
  const popup = document.getElementById("carouselPopup");
  const closeButton = popup.querySelector(".close");

  trigger.addEventListener("click", (e) => {
    popup.classList.toggle("active");
    trigger.classList.toggle("active");
    e.stopPropagation();
  });

  closeButton.addEventListener("click", () => {
    popup.classList.remove("active");
    trigger.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== trigger) {
      popup.classList.remove("active");
      trigger.classList.remove("active");
    }
  });
});
