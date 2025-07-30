document.addEventListener("DOMContentLoaded", () => {
  fetch('../baseDeDatos/data.json')
    .then(response => response.json())
    .then(data => {
      const carousel = document.getElementById('carousel-inner');

      if (!carousel) {
        console.error('No se encontró el contenedor con id="carousel-inner"');
        return;
      }

      data.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'carousel-item' + (index === 0 ? ' active' : '');

        div.innerHTML = `
  <div class="d-flex flex-column align-items-center p-3">
    <img src="${item.img}" alt="${item.pais}" style="width: 100%; max-width: 500px; height: auto; object-fit: contain; border-radius: 10px;">
    <div class="mt-2 d-flex align-items-center justify-content-center gap-2">
      <img src="${item.bandera}" alt="Bandera de ${item.pais}" style="width: 24px; height: auto;">
      <h5 class="m-0 text-center">${item.pais}</h5>
      <img src="${item.bandera}" alt="Bandera de ${item.pais}" style="width: 24px; height: auto;">
    </div>
  </div>
`;


        carousel.appendChild(div);
      });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});




// //
// fetch('../baseDeDatos/data.json')
//    .then(response => response.json())
//    .then(data => {
//      const carousel = document.getElementById('carousel-inner');

//      data.forEach((item, index) => {
//       console.log(`${item.bandera} ${item.pais}`); 
//        const div = document.createElement('div');
//        div.className = 'carousel-item' + (index === 0 ? ' active' : '');

//        div.innerHTML = `
//    <div class="text-center p-3">     
//      <img src="${item.img}" alt="${item.pais}" style="width: 500px; height: 480px; object-fit: cover; margin: 0 auto; display: block;">
//      <div class="mt-2">
//        <h4>
//   <img src="${item.bandera}" alt="Bandera de ${item.pais}" style="width: 24px; vertical-align: middle; margin-right: 8px;">
//   ${item.pais}
//   <img src="${item.bandera}" alt="Bandera de ${item.pais}" style="width: 24px; vertical-align: middle; margin-right: 8px;">
// </h4>

//      </div>
//    </div>
//  `;


//        carousel.appendChild(div);
//      });
//    })
//    .catch(error => console.error('Error al cargar el JSON:', error));




