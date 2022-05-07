const headerButton = document.querySelector('#button-header');
const headerEmail = document.querySelector('#email-header');
const headerPassword = document.querySelector('#password-header');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

headerButton.addEventListener('click', () => {
  if (headerEmail.value === 'tryber@teste.com' && headerPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

submitBtn.disabled = true;
agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
