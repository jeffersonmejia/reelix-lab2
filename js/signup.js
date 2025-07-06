const d = document,
  $boxTransformed = d.querySelectorAll('form')

function toggleBoxex() {
  $boxTransformed.forEach((el) => el.classList.remove('translated-box'))
}

d.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => toggleBoxex(), 500)
})

let currentStep = 1

function showStep(step) {
  document
    .querySelectorAll('.step')
    .forEach((el) => el.classList.remove('active'))
  document.getElementById(`step-${step}`).classList.add('active')
}

function nextStep() {
  if (currentStep < 3) {
    currentStep++
    showStep(currentStep)
  }
}

function resetSteps() {
  currentStep = 1
  showStep(currentStep)
}

function selectPlan(plan) {
  console.log('Plan seleccionado:', plan)
  currentStep = 3
  showStep(currentStep)
}

function nextStep() {
  const form = document.getElementById('signup-form')

  if (form.checkValidity()) {
    const password = form.querySelector('input[name="password"]').value
    const confirmPassword = form.querySelector(
      'input[name="confirm-password"]'
    ).value

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.')
      return
    }

    document.getElementById('step-1').classList.remove('active')
    document.getElementById('step-2').classList.add('active')
  } else {
    form.reportValidity()
  }
}
