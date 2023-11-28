// FUNCIÓN PARA SOLICITAR AL USUARIO QUE INGRESE UN TEXTO
function agregarTexto(mapapalabras) {
    const texto = prompt('Ingresa texto:');
    alert('Texto agregado correctamente.');
  
    return texto;
  }
  
  // FUNCIÓN PARA RECIBIR EL MAPA DE PALABRAS Y EL TEXTO INGRESADO
  function procesarTexto(mapapalabras, texto) {
    if (texto === '') {
      alert('No has ingresado ningún texto. Por favor, agrega un texto antes de procesar.');
      return;
    }
  
    const palabras = texto.toLowerCase().split(' ');
  
    palabras.forEach((palabra) => {
      if (mapapalabras.has(palabra)) {
        mapapalabras.set(palabra, mapapalabras.get(palabra) + 1);
      } else {
        mapapalabras.set(palabra, 1);
      }
    });
  
    let resultado = 'Palabras y su frecuencia:\n';
    mapapalabras.forEach((frecuencia, palabra) => {
      resultado += `${palabra}: ${frecuencia}\n`;
    });
  
    alert(resultado);
  }
  
  // FUNCIÓN PARA MOSTRAR EL MENÚ Y PROCESAR LAS OPCIONES
  function mostrarMenu() {
    const mapapalabras = new Map();
    let texto = '';
  
    while (true) {
      const opcion = prompt(`Menú:
        1. Agregar texto
        2. Procesar texto
        3. Salir`);
  
      switch (opcion) {
        case '1':
          texto = agregarTexto(mapapalabras);
          break;
        case '2':
          procesarTexto(mapapalabras, texto);
          break;
        case '3':
          alert('Saliendo del programa...');
          return;
        default:
          alert('Opción inválida. Por favor, elige una opción válida.');
          break;
      }
    }
  }
  
  mostrarMenu();