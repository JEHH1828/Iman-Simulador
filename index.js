function crearImagenesAdicionales() {
  const subImgDiv = this.parentNode;
  const img = this;

  // Obtener el ancho de la imagen actual
  const imgWidth = img.offsetWidth;

  // Verificar si se ha alcanzado el límite de 2 veces para la imagen actual
  const contador = parseInt(img.getAttribute('data-contador')) || 0;
  if (contador < 2) {
    // Crear dos imágenes más pequeñas al lado de la imagen actual
    for (let i = 0; i < 2; i++) {
      if (contador < 2) {
        const nuevaSubImgDiv = document.createElement('div');
        nuevaSubImgDiv.classList.add('sub-img');
        nuevaSubImgDiv.style.display = "inline-block"; // Establecer la alineación horizontal
        const nuevaImg = document.createElement('img');
        nuevaImg.src = img.src;
        nuevaImg.style.width = `${imgWidth * 0.6}px`; // Establecer el 60% del ancho de la imagen actual
        nuevaImg.addEventListener('click', crearImagenesAdicionales); // Asignar el mismo evento de clic a las nuevas imágenes
        nuevaImg.setAttribute('data-contador', contador + 1); // Incrementar el contador individual para la nueva imagen
        nuevaSubImgDiv.appendChild(nuevaImg);
        subImgDiv.appendChild(nuevaSubImgDiv);
      }
    }
    img.setAttribute('data-contador', contador + 1); // Incrementar el contador individual para la imagen actual
    img.removeEventListener('click', crearImagenesAdicionales); // Bloquear la imagen actual
  }
}

function crearBotones() {
  const buttonContainer = document.getElementById('buttonContainer');
  const cortadoDiv = document.getElementById('cortado');

  // Crear el primer botón
  const btn = document.getElementById('btn');
  btn.removeEventListener('click', crearBotones);
  btn.disabled = true;
  const btnWidth = btn.offsetWidth; // Obtener el ancho del primer botón

  // Crear las dos imágenes más pequeñas al lado del botón actual
  for (let i = 0; i < 2; i++) {
    const subImgDiv = document.createElement('div');
    subImgDiv.classList.add('sub-img');
    subImgDiv.style.display = "inline-block"; // Establecer la alineación horizontal
    subImgDiv.style.width = `${btnWidth}px`; // Establecer el ancho del primer botón para la subimagen
    const img = document.createElement('img');
    img.src = 'img/sim.png';
    img.style.width = `${btnWidth * 0.6}px`; // Establecer el 60% del ancho del primer botón para la imagen
    img.addEventListener('click', crearImagenesAdicionales); // Asignar el evento de clic a las imágenes
    img.setAttribute('data-contador', 0); // Establecer el contador individual para la imagen
    subImgDiv.appendChild(img);
    cortadoDiv.appendChild(subImgDiv);
  }
}
