const productos = [
    {
        "id": 1,
        "nombre": "Argentina",
        "descripcion": "Visita a Argentina",
        "img": "../assets/paises/argentina.webp"
    },
    { id: 2, nombre: "Producto B", descripcion: "Descripción del producto B", imagen: "https://via.placeholder.com/800x400?text=Producto+B" },
    { id: 3, nombre: "Producto C", descripcion: "Descripción del producto C", imagen: "https://via.placeholder.com/800x400?text=Producto+C" }
  ];
  
  const carouselInner = document.getElementById("carousel-inner");
  
  productos.forEach((producto, index) => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (index === 0) item.classList.add("active");
  
    item.innerHTML = `
      <img src="${producto.imagen}" class="d-block w-100" alt="${producto.nombre}">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
        <h5>${producto.nombre}</h5>
        <p>${producto.descripcion}</p>
      </div>
    `;
  
    carouselInner.appendChild(item);
  });
  