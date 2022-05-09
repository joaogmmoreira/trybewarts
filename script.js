const headerButton = document.querySelector('#button-header');
const headerEmail = document.querySelector('#email-header');
const headerPassword = document.querySelector('#password-header');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const evaluationForm = document.querySelector('#evaluation-form');

const inputName = document.querySelector('#input-name');
const inputLastname = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const inputInterest = document.querySelectorAll('.subject');
const interestArray = [];

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
  counter.innerHTML = 500 - lang.length;
});

function interestCheck() {
  for (let i = 0; i < inputInterest.length; i += 1) {
    if (inputInterest[i].checked) {
      interestArray.push(` ${inputInterest[i].value}`);
    }
  }
}

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  const rate = document.querySelector('input[type="radio"][name=rate]:checked').value;
  const family = document.querySelector('input[type="radio"][name=family]:checked').value;
  interestCheck();
  evaluationForm.innerHTML = `Nome: ${inputName.value} ${inputLastname.value}<br>
  Email: ${inputEmail.value}<br>
  Casa: ${inputHouse.value}<br>
  Família: ${family}<br>
  Matérias:${interestArray}<br> 
  Avaliação: ${rate}<br>
  Observações: ${textarea.value}`;
});
