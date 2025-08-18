const d = document,
  $video = d.querySelector('video'),
  $counter = d.querySelector('.counter')

let isiPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent),
  hiddeVideoStarted = false

//FUNCIONES
function hiddeVideo() {
  let counter = 24,
    hasFadedOut = false
  $video.currentTime = 0
  let interval = setInterval(() => {
    $counter.textContent = `${counter}(s)`
    counter = counter - 1
    if (counter <= 5 && !hasFadedOut) {
      //SONIDO FADE OUT
      let fadeVolume = setInterval(() => {
        if ($video.volume > 0.02) {
          $video.volume = $video.volume - 0.02
          hasFadedOut = true
        } else {
          $video.volume = 0
          clearInterval(fadeVolume)
        }
      }, 100)
    }
    //CIERRA CONTADOR
    if (counter == 0) {
      $counter.classList.add('hidden')
      $video.classList.add('opacity-none')
      //DESAPARECE VIDEO
      setTimeout(() => {
        $video.classList.add('hidden')
      }, 1000)
      clearInterval(interval)
    }
  }, 1000)

  setTimeout(() => {
    $video.classList.toggle('video-hidden')
  }, 28000)
}

//MUESTRA LOGO PÁG. INICIO
function toogleLogo() {
  setTimeout(() => {
    d.querySelector('.logo-home-animation').classList.add('hidden')
  }, 5000)
  setTimeout(() => {
    d.querySelector('.body-start').classList.remove('body-start')
    d.querySelectorAll('.opacity-hidden').forEach((el) =>
      el.classList.remove('opacity-hidden')
    )
    if (!$video.paused) {
      hiddeVideo()
    }
    enableEvents()
  }, 5500)
}

//ACTIVA SONIDO CUANDO EL USUARIO
//... HACE: SCROLL, TOUCH, ETC
function activateSound() {
  $video.muted = false
  $video.volume = 0
  let fadeIn = setInterval(() => {
    if ($video.volume < 1) {
      $video.volume = Math.min($video.volume + 0.02, 1)
    } else {
      clearInterval(fadeIn)
    }
  }, 300)
  d.removeEventListener('click', activateSound)
  d.removeEventListener('scroll', activateSound)
  d.removeEventListener('touchstart', activateSound)
}

function enableEvents() {
  d.addEventListener('click', activateSound)
  d.addEventListener('scroll', () => {
    if ($video.muted) {
      activateSound()
    }
    checkScrollForPiP()
  })
  d.addEventListener('touchstart', activateSound)
}

function checkScrollForPiP() {
  const scrollPosition = window.scrollY + window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  if (scrollPosition >= documentHeight / 2) {
    $video.classList.add('video-pip')
    $video.controls = false
  } else {
    $video.classList.remove('video-pip')
    $video.controls = true
  }
}

//RESTRICCIÓN SAFARI REPRODUCCIÓN AUTOMÁTICA
$video.addEventListener('playing', () => {
  if (!hiddeVideoStarted && isiPhone) {
    hiddeVideoStarted = true
    if (!$video.paused) {
      hiddeVideo()
    }
  }
})

d.addEventListener('DOMContentLoaded', (e) => {
  toogleLogo()
})
