const grid = document.querySelector('.grid')
const starsList = document.querySelectorAll('.stars')
const registros = JSON.parse(localStorage.getItem('reelix_registro')) || []
const usuario = registros[registros.length - 1]
const usuarioCorreo = usuario ? usuario.email : 'anonimo'

const storedRatings = JSON.parse(localStorage.getItem('reelix_ratings')) || {}

const items = Array.from(document.querySelectorAll('.item'))

items.forEach(item => {
  const stars = item.querySelector('.stars')
  const title = item.querySelector('p').innerText.split('\n')[0]
  const rating = storedRatings[usuarioCorreo]?.[title] ?? 0
  stars.setAttribute('data-rating', rating)
  stars.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating)

  stars.addEventListener('click', () => {
    let currentRating = parseInt(stars.getAttribute('data-rating'))
    currentRating = (currentRating + 1) % 6
    stars.setAttribute('data-rating', currentRating)
    stars.innerHTML = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating)

    if (!storedRatings[usuarioCorreo]) storedRatings[usuarioCorreo] = {}
    storedRatings[usuarioCorreo][title] = currentRating
    localStorage.setItem('reelix_ratings', JSON.stringify(storedRatings))

    sortGrid()
  })
})

function sortGrid() {
  const sortedItems = items.sort((a, b) => {
    const aTitle = a.querySelector('p').innerText.split('\n')[0]
    const bTitle = b.querySelector('p').innerText.split('\n')[0]
    const aRating = storedRatings[usuarioCorreo]?.[aTitle] ?? 0
    const bRating = storedRatings[usuarioCorreo]?.[bTitle] ?? 0
    return bRating - aRating
  })
  sortedItems.forEach(item => grid.appendChild(item))
}

sortGrid()
