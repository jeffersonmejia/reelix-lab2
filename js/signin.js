const STORAGE_KEY = 'reelix_registro';
let registros = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showError(input, message) {
  let errorEl = input.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains('error-message')) {
    errorEl = document.createElement('label');
    errorEl.className = 'error-message';
    errorEl.style.color = 'red';
    errorEl.style.fontSize = '0.9em';
    errorEl.style.display = 'block';
    input.insertAdjacentElement('afterend', errorEl);
  }
  errorEl.textContent = message;
}

async function handleLogin(event) {
  event.preventDefault();

  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  const errorMessages = loginForm.querySelectorAll('.error-message');
  errorMessages.forEach(el => el.textContent = '');

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  let hayError = false;

  if (!email) {
    showError(emailInput, 'Ingresa tu correo.');
    hayError = true;
  }
  if (!password) {
    showError(passwordInput, 'Ingresa tu contraseña.');
    hayError = true;
  }

  const usuario = registros.find(u => u.email === email);
  if (!usuario && email) {
    showError(emailInput, 'Correo no registrado.');
    hayError = true;
  } else if (usuario && usuario.password !== password) {
    showError(passwordInput, 'Contraseña incorrecta.');
    hayError = true;
  }

  if (hayError) return;

  const waitTime = Math.floor(Math.random() * 1000) + 3000; 
  await delay(waitTime);

  const href = loginForm.getAttribute('action') || '#';
  if (href !== '#') {
    window.location.href = href;
  }
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', handleLogin);
}
