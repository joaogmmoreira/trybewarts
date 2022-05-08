const headerButton = document.querySelector('#button-header');
const headerEmail = document.querySelector('#email-header');
const headerPassword = document.querySelector('#password-header');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

const mainForm = document.querySelector('#main-form-section');
const formResume = document.querySelector('#form-resume');
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
  console.log(lang.length);
  counter.innerHTML = 500 - lang.length;
});

const showElement = (element) => { element.style.display = 'flex'; };
const hiddenElement = (element) => { element.style.display = 'none'; };

function interestCheck() {
  for (interest of inputInterest) {
    if(interest.checked) {
      interestArray.push(interest.value+' ');
    };
  };
};

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  const rate = document.querySelector('input[type="radio"][name=rate]:checked').value;
  const family = document.querySelector('input[type="radio"][name=family]:checked').value;
  interestCheck();
  hiddenElement(mainForm);
  showElement(formResume);
  console.log(
    inputName.value,
    inputLastname.value,
    inputEmail.value,
    inputHouse.value,
    rate,
    family,
    interestArray,
  );
});
