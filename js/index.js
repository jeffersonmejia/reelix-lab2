const d = document,
  $video = d.querySelector('video'),
  $counter = d.querySelector('.counter')

function hiddeVideo() {
  let counter = 28
  let interval = setInterval(() => {
    $counter.textContent = `${counter}(s)`
    counter = counter - 1
    if (counter == 0) {
      $counter.classList.add('hidden')
      $video.classList.add('hidden')
      clearInterval(interval)
    }
  }, 1000)

  setTimeout(() => {
    $video.classList.toggle('video-hidden')
  }, 28000)
}

$video.addEventListener('canplaythrough', () => {
  setTimeout(() => {
    $video.play()
    $video.muted = false
    hiddeVideo()
  }, 3000)
})
