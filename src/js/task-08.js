const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const emailValue = form.elements.email.value;
  const passwordValue = form.elements.password.value;
  const data = {};

  if (emailValue === '' || passwordValue === '') {
    const message = 'You must fill in all fields!!!';
    alert(message);
    return;
  } else {
    data.email = emailValue;
    data.password = passwordValue;
    console.log(data);
  }
  form.reset();
}
