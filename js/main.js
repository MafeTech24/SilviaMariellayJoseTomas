fetch('../baseDeDatos/data.json')
   .then(response => response.json())
   .then(data => {
     const carousel = document.getElementById('carousel-content');

     data.forEach((item, index) => {
      console.log(`${item.bandera} ${item.pais}`); 
       const div = document.createElement('div');
       div.className = 'carousel-item' + (index === 0 ? ' active' : '');

       div.innerHTML = `
   <div class="text-center p-3">     
     <img src="${item.img}" alt="${item.pais}" style="width: 500px; height: 480px; object-fit: cover; margin: 0 auto; display: block;">
     <div class="mt-2">
       <h3>
  <img src="${item.bandera}" alt="Bandera de ${item.pais}" style="width: 40px; vertical-align: middle; margin-right: 8px;">
  ${item.pais}
  <img src="${item.bandera}" alt="Bandera de ${item.pais}" style="width: 40px; vertical-align: middle; margin-right: 8px;">
</h3>

     </div>
   </div>
 `;


       carousel.appendChild(div);
     });
   })
   .catch(error => console.error('Error al cargar el JSON:', error));




