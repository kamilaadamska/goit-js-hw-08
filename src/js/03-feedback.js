import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const savedValues = localStorage.getItem('feedback-form-state');
let parsedValues;

if (savedValues) {
  try {
    parsedValues = JSON.parse(savedValues);
    formEl.elements.email.value = parsedValues.email;
    formEl.elements.message.value = parsedValues.message;
  } catch (error) {
    console.log(error.message);
  }
}

formEl.addEventListener(
  'input',
  throttle(() => {
    const formValues = {
      email: formEl.elements.email.value,
      message: formEl.elements.message.value,
    };

    try {
      localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
    } catch (error) {
      console.log(error.message);
    }
  }, 500)
);

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formEl.elements.email.value = '';
  formEl.elements.message.value = '';
  console.log(parsedValues);
});
