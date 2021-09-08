'use strict';
// De viaje
// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York

const selectCity = document.querySelector('.js-select');
const select = document.getElementById('city');
const image1 = document.createElement('img');
const image2 = document.querySelector('.pic2');
const image3 = document.querySelector('.pic3');

function handleClick() {
  if (select.value === 'Madrid') {
    image1.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Palaciorealycatedraldelaalmudena_%28cropped%29.jpg/280px-Palaciorealycatedraldelaalmudena_%28cropped%29.jpg';
    image1.alt = 'Imagen de Madrid';
  } else if (select.value === 'París') {
    image2.src =
      'https://viajes.nationalgeographic.com.es/medio/2021/03/03/sena_4ffb342d_1254x836.jpg';
    image2.alt = 'Imagen';
  } else if (select.value === 'York') {
    image3.src =
      'https://viajes.nationalgeographic.com.es/medio/2021/03/03/sena_4ffb342d_1254x836.jpg';
    image3.alt = 'Imagen';
  }
}
selectCity.addEventListener('change', handleClick);
