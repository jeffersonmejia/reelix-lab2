const starsList = document.querySelectorAll('.stars')

starsList.forEach((stars) => {
  stars.addEventListener('click', () => {
    let currentRating = parseInt(stars.getAttribute('data-rating'))
    currentRating = (currentRating + 1) % 6
    stars.setAttribute('data-rating', currentRating)
    stars.innerHTML = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating)
  })
})
