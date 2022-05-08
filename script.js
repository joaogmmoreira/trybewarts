const headerButton = document.querySelector('#button-header');
const headerEmail = document.querySelector('#email-header');
const headerPassword = document.querySelector('#password-header');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

headerButton.addEventListener('click', () => {
  if (headerEmail.value === 'tryber@teste.com' && headerPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

submitBtn.disabled = true;
agreement.addEventListener('click', () => {
  submitBtn.disabled = agreement.checked !== true;
});

textarea.addEventListener('keyup', () => {
  const lang = textarea.value;
  console.log(lang.length);
  counter.innerHTML = 500 - lang.length;
});

submitBtn.addEventListener('click', () => {
  const formData = new FormData(document.querySelector('form'));
  console.log(formData);
});
