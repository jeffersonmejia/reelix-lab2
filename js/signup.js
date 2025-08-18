const d = document;
const STORAGE_KEY = 'reelix_registro';

let registros = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let registroActual = null;

const $boxTransformed = d.querySelectorAll('form');
function toggleBoxex() {
  $boxTransformed.forEach((el) => el.classList.remove('translated-box'));
}

let currentStep = 1;

function showStep(step) {
  d.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  const $target = d.getElementById(`step-${step}`);
  if ($target) $target.classList.add('active');
  currentStep = step;
}

//guarda formulario principal
function nextStep() {
  const form = d.getElementById('signup-form');
  if (!form) return;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const password = form.querySelector('input[name="password"]').value;
  const confirmPassword = form.querySelector('input[name="confirm-password"]').value;
  if (password !== confirmPassword) {
    const confirmInput = form.querySelector('input[name="confirm-password"]');
    confirmInput.setCustomValidity('Las contraseñas no coinciden.');
    confirmInput.reportValidity();
    return;
  } else {
    form.querySelector('input[name="confirm-password"]').setCustomValidity('');
  }

  const emailInput = form.querySelector('input[name="email"]');
  const email = emailInput.value;
  const emailExists = registros.some(usuario => usuario.email === email);
  if (emailExists) {
    emailInput.setCustomValidity('El correo ingresado ya se encuentra registrado.');
    emailInput.reportValidity();
    return;
  } else {
    emailInput.setCustomValidity('');
  }

  const genderChecked = form.querySelector('input[name="gender"]:checked');
  if (!genderChecked) {
    const genderInputs = form.querySelectorAll('input[name="gender"]');
    genderInputs.forEach(inp => inp.setCustomValidity('Selecciona tu género.'));
    genderInputs[0].reportValidity();
    return;
  } else {
    const genderInputs = form.querySelectorAll('input[name="gender"]');
    genderInputs.forEach(inp => inp.setCustomValidity(''));
  }

  const profilePicInput = form.querySelector('input[name="profile-pic"]');

  registroActual = {
    nombre: form.querySelector('input[name="name"]').value,
    email: email,
    password: password,
    country: form.querySelector('select[name="country"]').value,
    gender: genderChecked.value,
    birthdate: form.querySelector('input[name="birthdate"]').value,
    profilePicName: profilePicInput?.files?.[0]?.name || '',
    termsAccepted: form.querySelector('input[name="terms"]').checked,
    plan: null, 
    pago: null, 
    fechaRegistro: null  
  };

  showStep(2);
}
window.nextStep = nextStep;

//guarda plan 
function selectPlan(plan) {
  if (!registroActual) return;
  registroActual.plan = plan;
  showStep(3);
}
window.selectPlan = selectPlan;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function finalizeRegistration(e) {
  e.preventDefault();
  if (!registroActual) return;

  const selected = d.querySelector('input[name="payment"]:checked');
  if (!selected) {
    alert('Selecciona un método de pago.');
    return;
  }

  registroActual.pago = selected.value;
  registroActual.fechaRegistro = new Date().toISOString();

  registros.push(registroActual);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registros));

  registroActual = null;

  const href = e.currentTarget.getAttribute('href') || '#';

  const waitTime = Math.floor(Math.random() * 1000) + 3000; 
  await delay(waitTime);

  if (href !== '#') window.location.href = href;
}
window.finalizeRegistration = finalizeRegistration;

d.addEventListener('DOMContentLoaded', () => {
  setTimeout(toggleBoxex, 500);
  showStep(currentStep);

  const finalizeLink = d.querySelector('#step-3 .step-buttons a');
  if (finalizeLink) {
    finalizeLink.addEventListener('click', finalizeRegistration);
  }

  console.table(registros);
});
