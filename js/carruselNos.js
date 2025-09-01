let indice = 0;
let intervalo;

fetch("../baseDeDatos/nosotros.json")
  .then(response => {
    if (!response.ok) throw new Error("Error al cargar el JSON");
    return response.json();
  })
  .then(data => {
    const imagenes = data;
    const contenedor = document.getElementById("imagenes");

    imagenes.forEach((imgObj, i) => {
      const img = document.createElement("img");
      img.src = imgObj.src;
      img.id = imgObj.id;
      img.alt = `Imagen ${i + 1}`;
      if (i === 0) img.classList.add("activa");
      contenedor.appendChild(img);
    });

    const total = imagenes.length;

    function mostrarImagen(index) {
      const imgs = document.querySelectorAll("#imagenes img");
      imgs.forEach(img => img.classList.remove("activa"));
      imgs[index].classList.add("activa");
    }

    function siguiente() {
      indice = (indice + 1) % total;
      mostrarImagen(indice);
    }

    function anterior() {
      indice = (indice - 1 + total) % total;
      mostrarImagen(indice);
    }

    document.getElementById("siguiente").addEventListener("click", () => {
      siguiente();
      reiniciarAuto();
    });

    document.getElementById("anterior").addEventListener("click", () => {
      anterior();
      reiniciarAuto();
    });

    function iniciarAuto() {
      intervalo = setInterval(siguiente, 3000);
    }

    function reiniciarAuto() {
      clearInterval(intervalo);
      iniciarAuto();
    }

    iniciarAuto();
  })
  .catch(error => {
    console.error("Error al cargar el JSON:", error);
  });
