const registros = JSON.parse(localStorage.getItem('reelix_registro')) || []
const usuario = registros[registros.length - 1]

if (usuario) {
  const profileImg = document.querySelector('.profile-information img')
  const profileName = document.querySelector('.profile-information h3')
  const profilePlan = document.querySelector('.profile-information h5')

  profileName.textContent = usuario.nombre
  profilePlan.textContent = `Plan ${usuario.plan.charAt(0).toUpperCase() + usuario.plan.slice(1)}`
}
