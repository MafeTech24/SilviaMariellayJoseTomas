// function generarID(longitud = 8) {
//     const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let id = '';
//     for (let i = 0; i < longitud; i++) {
//       id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
//     }
//     return id;
//   }
  
//   const idsUnicos = new Set();
  
//   function crearIDUnico() {
//     let nuevoID;
//     do {
//       nuevoID = generarID();
//     } while (idsUnicos.has(nuevoID));
//     idsUnicos.add(nuevoID);
//     return nuevoID;
//   }
  
//   const paises = [
//     {
//       nombre: "Argentina",
//       descripcion: "Paisaje en la Patagonia",
//       img: "../assets/paises/argentina.webp",
//       bandera: "🇦🇷"
//     },
//     {
//       nombre: "Japón",
//       descripcion: "Templo tradicional en Kioto",
//       img: "https://example.com/kioto.jpg",
//       bandera: "🇯🇵"
//     },
//     {
//       nombre: "Francia",
//       descripcion: "La Torre Eiffel al atardecer",
//       img: "https://example.com/eiffel.jpg",
//       bandera: "🇫🇷"
//     },
//     {
//       nombre: "Brasil",
//       descripcion: "Vista aérea del Cristo Redentor",
//       img: "https://example.com/rio.jpg",
//       bandera: "🇧🇷"
//     },
//     {
//       nombre: "Italia",
//       descripcion: "Calles antiguas de Roma",
//       img: "https://example.com/roma.jpg",
//       bandera: "🇮🇹"
//     },
//     {
//       nombre: "México",
//       descripcion: "Pirámide de Chichén Itzá",
//       img: "https://example.com/chichen.jpg",
//       bandera: "🇲🇽"
//     },
//     {
//       nombre: "Canadá",
//       descripcion: "Bosques nevados y lagos cristalinos",
//       img: "https://example.com/canada.jpg",
//       bandera: "🇨🇦"
//     },
//     {
//       nombre: "Egipto",
//       descripcion: "Las pirámides de Giza",
//       img: "https://example.com/giza.jpg",
//       bandera: "🇪🇬"
//     },
//     {
//       nombre: "Australia",
//       descripcion: "La Ópera de Sídney al atardecer",
//       img: "https://example.com/sydney.jpg",
//       bandera: "🇦🇺"
//     },
//     {
//       nombre: "India",
//       descripcion: "El majestuoso Taj Mahal",
//       img: "https://example.com/tajmahal.jpg",
//       bandera: "🇮🇳"
//     }
//   ];
  
//   const fotos = paises.map(pais => ({
//     id: crearIDUnico(),
//     img: pais.img,
//     descripcion: pais.descripcion,
//     país: pais.nombre,
//     bandera: pais.bandera
//   }));
  
//   console.log(fotos);
  
  
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
     <h2> "... recibirán la fuerza del Espíritu Santo que descenderá sobre ustedes, y serán mis testigos en Jerusalén, en toda Judea y Samaría, y hasta los confines de la tierra ..." (Hch1,8)</h2>
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




