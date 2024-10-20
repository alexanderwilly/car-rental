const back = document.getElementById('back-button');
back.addEventListener('click', () => {
    window.location.href = '../login/login.html';
});

const fullName = document.getElementById('fullName');
const dob = document.getElementById('dob');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const city = document.getElementById('city');
const country = document.getElementById('country');
const postalCode = document.getElementById('postalCode');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const card = document.getElementById('card');
const expiry = document.getElementById('expiry');
const cvv = document.getElementById('cvv');
const license = document.getElementById('license');
const terms = document.getElementById('terms');
const consent = document.getElementById('consent');
const error_message = document.getElementById('error-message');

// Full Name, City, Country Regex (Alphabets and Spaces)
const nameRegex = /^[a-zA-Z\s]+$/;

// Address regex (Alphanumeric, Spaces, Comma, Period, Hyphen, Hashtag)
const addressRegex = /^[a-zA-Z0-9\s\,\.\-\#]+$/;

// Postal Code regex (numbers)
const postalRegex = /^[0-9]+$/;

// Email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone regex ( country code, followed by numbers)
const phoneRegex = /^\+[0-9]+$/;

// Password regex (Minimum 8 characters and only allow alpha numeric characters)
const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

// Card regex (16 digits)
const cardRegex = /^[0-9]{16}$/;

// cvv regex (3 or 4 digits)
const cvvRegex = /^[0-9]{3,4}$/;

// License regex ( alphanumeric characters)
const licenseRegex = /^[a-zA-Z0-9]+$/;



const register_button = document.getElementById('register-button');
register_button.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Check for empty fields
    if (fullName.value === '' || dob.value === '' || address1.value === '' || city.value === '' || country.value === '' || postalCode.value === '' || email.value === '' || phone.value === '' || password.value === '' || confirmPassword.value === '' || card.value === '' || expiry.value === '' || cvv.value === '' || license.value === '') {
        error_message.innerHTML = 'Please fill in all fields';
        return;
    }

    // Check for valid inputs
    if (!nameRegex.test(fullName.value)) {
        error_message.innerHTML = 'Invalid Full Name, please use only alphabets and spaces';
        return;
    }

    if (!addressRegex.test(address1.value) || (!addressRegex.test(address2.value) && address2.value !== '')) {
        error_message.innerHTML = 'Invalid Address, please use only alphanumeric characters, spaces, commas, periods, hyphens and hashtags';
        return;
    }

    if (!nameRegex.test(city.value)) {
        error_message.innerHTML = 'Invalid City, please use only alphabets and spaces';
        return;
    }

    if (!nameRegex.test(country.value)) {
        error_message.innerHTML = 'Invalid Country, please use only alphabets and spaces';
        return;
    }

    if (!postalRegex.test(postalCode.value)) {
        error_message.innerHTML = 'Invalid Postal Code, please use only numbers';
        return;
    }

    if (!emailRegex.test(email.value)) {
        error_message.innerHTML = 'Invalid Email';
        return;
    }

    if (!phoneRegex.test(phone.value)) {
        error_message.innerHTML = 'Invalid Phone Number';
        return;
    }

    if (!passwordRegex.test(password.value)) {
        error_message.innerHTML = 'Invalid Password, please use only alphanumeric characters and minimum 8 characters';
        return;
    }

    if (!passwordRegex.test(confirmPassword.value)) {
        error_message.innerHTML = 'Invalid Confirm Password, please use only alphanumeric characters and minimum 8 characters';
        return;
    }

    if (password.value !== confirmPassword.value) {
        error_message.innerHTML = 'Passwords do not match';
        return;
    }

    if (!cardRegex.test(card.value)) {
        error_message.innerHTML = 'Invalid Card Number, please use only numbers';
        return;
    }

    if (!cvvRegex.test(cvv.value)) {
        error_message.innerHTML = 'Invalid CVV, please use only numbers';
        return;
    }

    if (!licenseRegex.test(license.value)) {
        error_message.innerHTML = 'Invalid License, please use only alphanumeric characters';
        return;
    }

    // Check if terms and conditions are accepted
    if (!terms.checked) {
        error_message.innerHTML = 'Please accept the terms and conditions';
        return;
    }

    // Check if consent is given
    if (!consent.checked) {
        error_message.innerHTML = 'Consent is required';
        return;
    }

    
    error_message.style.color = 'green';
    error_message.innerHTML = 'Register Successful! Please check your email for verification.';

    setTimeout(
        () => {window.location.href = '../login/login.html';}
        , 2000);
});

