const d = document,
  $boxTransformed = document.querySelectorAll('.politicas, .formulario')

function toggleBoxex() {
  $boxTransformed.forEach((el) => el.classList.remove('translated-box'))
}

d.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => toggleBoxex(), 500)
})
