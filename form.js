function validateForm(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let mobile = document.getElementById('mobile').value;
  let gender = document.getElementById('gender').value;
  let password = document.getElementById('password').value;

  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let mobileError = document.getElementById('mobileError');
  let genderError = document.getElementById('genderError');
  let passwordError = document.getElementById('passwordError');

  nameError.textContent = '';
  emailError.textContent = '';
  mobileError.textContent = '';
  genderError.textContent = '';
  passwordError.textContent = '';

  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name)) {
      nameError.textContent = 'Name should contain only alphabets';
      isValid = false;
    }
  }

  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Enter a valid email address';
      isValid = false;
    }
  }

  if (mobile === '') {
    mobileError.textContent = 'Mobile number is required';
    isValid = false;
  } else {
    const mobilePattern = /^[0-9]+$/;
    if (!mobilePattern.test(mobile)) {
      mobileError.textContent = 'Mobile number should contain only numbers';
      isValid = false;
    } else if (mobile.length !== 10) {
      mobileError.textContent = 'Mobile number should be 10 digits';
      isValid = false;
    }
  }

  if (gender === '') {
    genderError.textContent = 'Please select gender';
    isValid = false;
  }

  if (password === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  }

  if (isValid) {
    window.alert('Form submitted successfully');
    
  }
}
