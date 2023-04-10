const formEl = document.querySelector('.feedback-form');

const savedValues = localStorage.getItem('feedback-form-state');

if (savedValues) {
  const parsedValues = JSON.parse(savedValues);
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
