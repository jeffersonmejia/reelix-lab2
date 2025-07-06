const d = document,
  $navTransformed = d.querySelector('.nav-transformed')

function transformNav() {
  $navTransformed.classList.remove('nav-transformed')
}

d.addEventListener('DOMContentLoaded', (e) => {
  transformNav()
})
