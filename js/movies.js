// Arreglo con info de cada película
const movies = [
  {
    title: 'Guasón',
    genre: 'Drama, Crimen',
    duration: '2h 2m',
    description:
      'Arthur Fleck, un comediante fallido, se convierte en el infame Joker en Ciudad Gótica.',
    image: '../img/movies/Guason.jpg',
  },
  {
    title: 'Moana',
    genre: 'Animación, Aventura',
    duration: '1h 47m',
    description:
      'Una joven polinesia se embarca en una travesía para salvar a su pueblo.',
    image: '../img/movies/Moana.jpg',
  },
  {
    title: 'Maldición',
    genre: 'Terror, Suspenso',
    duration: '1h 35m',
    description:
      'Una entidad maldita atormenta a todo aquel que entra en contacto con ella.',
    image: '../img/movies/maldiccion.jpg',
  },
  {
    title: 'Mono',
    genre: 'Drama, Bélico',
    duration: '1h 42m',
    description:
      'Un grupo de jóvenes guerrilleros en las montañas de Colombia lucha por sobrevivir.',
    image: '../img/movies/Mono.jpg',
  },
  {
    title: 'Black Mirror',
    genre: 'Ciencia Ficción, Distopía',
    duration: '2h 10m',
    description:
      'En un futuro distópico, un soldado descubre un secreto que podría cambiarlo todo y debe decidir entre el deber y la verdad.',
    image: '../img/movies/BlackMirror.jpg',
  },
  {
    title: 'Breaking Bad',
    genre: 'Drama, Crimen',
    duration: '5 temporadas',
    description:
      'Un profesor de química se convierte en narcotraficante para asegurar el futuro de su familia.',
    image: '../img/movies/BreakingBad.jpg',
  },
  {
    title: 'Cobra Kai',
    genre: 'Acción, Comedia',
    duration: '4 temporadas',
    description:
      'La rivalidad entre Johnny Lawrence y Daniel LaRusso revive décadas después del torneo de karate.',
    image: '../img/movies/cobraKai.jpg',
  },
  {
    title: 'Doctor Strance',
    genre: 'Acción, Ciencia Ficción',
    duration: '2h 10m',
    description:
      'Un neurocirujano busca una cura en el mundo místico y se convierte en el Hechicero Supremo.',
    image: '../img/movies/doctorstrance.jpg',
  },
  {
    title: 'El Extraño',
    genre: 'Suspenso, Crimen',
    duration: '1h 58m',
    description:
      'Un agente se infiltra en una red criminal mientras lucha con sus propios secretos.',
    image: '../img/movies/elextraño.jpg',
  },
  {
    title: 'Game of Thrones',
    genre: 'Fantasía, Drama',
    duration: '8 temporadas',
    description:
      'Nobles luchan por el control del Trono de Hierro en los Siete Reinos de Westeros.',
    image: '../img/movies/GameofThrones.jpg',
  },
]

// Mostrar detalles de la película
function showDetails(index) {
  const movie = movies[index]
  document.getElementById('detail-img').src = movie.image
  document.getElementById('detail-title').textContent = movie.title
  document.getElementById('detail-genre').textContent = movie.genre
  document.getElementById('detail-duration').textContent = movie.duration
  document.getElementById('detail-description').textContent = movie.description

  // Mostrar la vista detallada y ocultar la lista
  document.getElementById('movie-list').style.display = 'none'
  document.getElementById('movie-details').style.display = 'block'
}

// Volver a la lista
function goBack() {
  document.getElementById('movie-details').style.display = 'none'
  document.getElementById('movie-list').style.display = 'block'
}
