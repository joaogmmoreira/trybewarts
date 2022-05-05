const headerButton = document.querySelector('#button-header');
const headerEmail = document.querySelector('#email-header');
const headerPassword = document.querySelector('#password-header');

headerButton.addEventListener('click', () => {
  if (headerEmail.value === 'tryber@teste.com' && headerPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
