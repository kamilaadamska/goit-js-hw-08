const formEl = document.querySelector('.feedback-form');

const savedValues = localStorage.getItem('feedback-form-state');
let parsedValues;

if (savedValues) {
  parsedValues = JSON.parse(savedValues);
  formEl.elements.email.value = parsedValues.email;
  formEl.elements.message.value = parsedValues.message;
}

formEl.addEventListener('input', () => {
  const formValues = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
});

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formEl.elements.email.value = '';
  formEl.elements.message.value = '';
  console.log(parsedValues);
});
