// Back handler
const back = document.getElementById('back-btn');
back.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "account.html";
});

// <----------------- Update User Account Handlers ----------------->

// update user info handler
const saveUserInfoBtn = document.getElementById('save-user-info');
saveUserInfoBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // Regex for name
    const nameRegex = /^[a-zA-Z\s]+$/;
    // Regex for home address
    const addressRegex = /^[a-zA-Z0-9\s,.'#-]+$/;
    // Regex for city and country
    const cityCountryRegex = /^[a-zA-Z\s]+$/;
    // Regex for postal
    const postalRegex = /^[0-9]{6}$/;


    const address1 = document.getElementById('address1').value.trim();
    const address2 = document.getElementById('address2').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const postal = document.getElementById('postal').value.trim();

    const fullname = document.getElementById('fullname').value.trim();
    const dob = document.getElementById('dob').value.trim();

    const error_msg = document.getElementById('update-user-guide');
    error_msg.style.color = '#c2272d';
    

    if (address1 === '' || city === '' || country === '' || postal === '' || fullname === '' || dob === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (!nameRegex.test(fullname)) {
        error_msg.innerHTML = 'Invalid name';
        return;
    }

    if (!addressRegex.test(address1)) {
        error_msg.innerHTML = 'Invalid address';
        return;
    }

    if (address2 !== '' && !addressRegex.test(address2)) {
        error_msg.innerHTML = 'Invalid address';
        return;
    }

    if (!cityCountryRegex.test(city) || !cityCountryRegex.test(country)) {
        error_msg.innerHTML = 'Invalid city or country';
        return;
    }

    if (postal.length !== 6 || !postalRegex.test(postal)) {
        error_msg.innerHTML = 'Invalid postal code';
        return;
    }

    error_msg.innerHTML = 'User information updated successfully!';
    error_msg.style.color = 'green';
});


// <----------------- Update User Phone Handlers ----------------->

// update phone handler
let isOldVerified = false;
const sendOTPPhone = document.getElementById('send-otp-phone');
sendOTPPhone.addEventListener('click', (event)=>{
    event.preventDefault();

    // Phone number regex with country code
    const phoneRegex = /^\+[0-9]{1,3}[0-9]{6,12}$/;

    const phone = document.getElementById('phone').value.trim();
    const error_msg = document.getElementById('update-phone-guide');
    error_msg.style.color = '#c2272d';

    if (phone === '') {
        error_msg.innerHTML = 'Please enter your phone number';
        return;
    }

    if (!phoneRegex.test(phone)) {
        error_msg.innerHTML = 'Invalid phone number\nFormat: +[country code][phone number]';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'OTP sent to your phone number';

    //enable otp field
    const otp = document.getElementById('otp-phone');
    const verify_otp = document.getElementById('verify-otp-phone');
    const send_otp = document.getElementById('send-otp-phone');

    otp.disabled = false;
    send_otp.style.display = isOldVerified ? 'block' : 'none';
    verify_otp.style.display = isOldVerified ? 'none' : 'block';

    if(isOldVerified){
        // enable save phone button
        const save_phone = document.getElementById('save-phone');
        save_phone.disabled = false;
        save_phone.style.backgroundColor = '#c2272d';
    }
    
});

// verify otp handler
const verifyOTPPhone = document.getElementById('verify-otp-phone');
verifyOTPPhone.addEventListener('click', (event)=>{
    event.preventDefault();
    const otp = document.getElementById('otp-phone').value.trim();
    const error_msg = document.getElementById('update-phone-guide');
    error_msg.style.color = '#c2272d';
    const otpNumber = '123456';
    

    if (otp === '') {
        error_msg.innerHTML = 'Please enter the OTP';
        return;
    }

    if (otp !== otpNumber) {
        error_msg.innerHTML = 'Invalid OTP';
        return;
    }

    

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Phone number verified successfully!<br/>You can now update your phone number';
    isOldVerified = true;

    // enable phone number field
    const phone = document.getElementById('phone');
    phone.disabled = false;

    // enable send otp button
    const send_otp = document.getElementById('send-otp-phone');

    send_otp.style.display = 'block';
    verifyOTPPhone.style.display = 'none';

    // disable otp field
    const otpField = document.getElementById('otp-phone');
    otpField.disabled = true;
    otpField.value = '';

    
});

// save phone number handler
const savePhoneBtn = document.getElementById('save-phone');
savePhoneBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // Phone number regex with country code
    const phoneRegex = /^\+[0-9]{1,3}[0-9]{6,12}$/;


    // get phone number and otp
    const phone = document.getElementById('phone').value.trim();
    const otp = document.getElementById('otp-phone').value.trim();

    const error_msg = document.getElementById('update-phone-guide');

    error_msg.style.color = '#c2272d';

    if (phone === '' || otp === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (!phoneRegex.test(phone)) {
        error_msg.innerHTML = 'Invalid phone number\nFormat: +[country code][phone number]';
        return;
    }

    if (otp !== '123456') {
        error_msg.innerHTML = 'Invalid OTP';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Phone number updated successfully!';
});



// <----------------- Update User Email Handlers ----------------->

// update email handler
let isOldEmailVerified = false;
const sendOTPEmail = document.getElementById('send-otp-email');
sendOTPEmail.addEventListener('click', (event)=>{
    event.preventDefault();

    // Email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const email = document.getElementById('email').value.trim();
    const error_msg = document.getElementById('update-email-guide');
    error_msg.style.color = '#c2272d';

    if (email === '') {
        error_msg.innerHTML = 'Please enter your email';
        return;
    }

    if (!emailRegex.test(email)) {
        error_msg.innerHTML = 'Invalid email';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'OTP sent to your email';

    //enable otp field
    const otp = document.getElementById('otp-email');
    const verify_otp = document.getElementById('verify-otp-email');
    const send_otp = document.getElementById('send-otp-email');

    otp.disabled = false;
    send_otp.style.display = isOldEmailVerified ? 'block' : 'none';
    verify_otp.style.display = isOldEmailVerified ? 'none' : 'block';

    if(isOldEmailVerified){
        // enable save email button
        const save_email = document.getElementById('save-email');
        save_email.disabled = false;
        save_email.style.backgroundColor = '#c2272d';
    }
    
});

// verify otp handler
const verifyOTPEmail = document.getElementById('verify-otp-email');
verifyOTPEmail.addEventListener('click', (event)=>{
    event.preventDefault();
    const otp = document.getElementById('otp-email').value.trim();
    const error_msg = document.getElementById('update-email-guide');
    error_msg.style.color = '#c2272d';
    const otpNumber = '123456';
    

    if (otp === '') {
        error_msg.innerHTML = 'Please enter the OTP';
        return;
    }

    if (otp !== otpNumber) {
        error_msg.innerHTML = 'Invalid OTP';
        return;
    }

    

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Email verified successfully!<br/>You can now update your email';
    isOldEmailVerified = true;

    // enable email field
    const email = document.getElementById('email');
    email.disabled = false;

    // enable send otp button
    const send_otp = document.getElementById('send-otp-email');

    send_otp.style.display = 'block';
    verifyOTPEmail.style.display = 'none';

    // disable otp field
    const otpField = document.getElementById('otp-email');
    otpField.disabled = true;
    otpField.value = '';
    
});

// save email handler
const saveEmailBtn = document.getElementById('save-email');
saveEmailBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // Email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // get email and otp
    const email = document.getElementById('email').value.trim();
    const otp = document.getElementById('otp-email').value.trim();
    const error_msg = document.getElementById('update-email-guide');
    error_msg.style.color = '#c2272d';

    if (email === '' || otp === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (!emailRegex.test(email)) {
        error_msg.innerHTML = 'Invalid email';
        return;
    }

    if (otp !== '123456') {
        error_msg.innerHTML = 'Invalid OTP';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Email updated successfully!';
});


// <----------------- Update User Password Handlers ----------------->

// update password handler
const sendOTPPassword = document.getElementById('send-otp-password');
sendOTPPassword.addEventListener('click', (event)=>{
    event.preventDefault();

    // enable otp field
    const otp = document.getElementById('otp-password');
    const verify_otp = document.getElementById('verify-otp-password');

    otp.disabled = false;
    verify_otp.style.display = 'block';
    sendOTPPassword.style.display = 'none';

    // change guide text
    const error_msg = document.getElementById('update-password-guide');
    error_msg.style.color = 'green';
    error_msg.innerHTML = 'OTP sent to your email';
})

// verify otp handler
const verifyOTPPassword = document.getElementById('verify-otp-password');
verifyOTPPassword.addEventListener('click', (event)=>{
    event.preventDefault();
    const otp = document.getElementById('otp-password').value.trim();
    const error_msg = document.getElementById('update-password-guide');
    error_msg.style.color = '#c2272d';
    const otpNumber = '123456';
    

    if (otp === '') {
        error_msg.innerHTML = 'Please enter the OTP';
        return;
    }

    if (otp !== otpNumber) {
        error_msg.innerHTML = 'Invalid OTP';
        return;
    }

    

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'OTP verified successfully!<br/>You can now update your password';

    // enable password fields
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm-password');

    password.disabled = false;
    confirm_password.disabled = false;

    // enable save password button
    const save_password = document.getElementById('save-password');
    save_password.style.display = 'block';

    // disable otp field
    const otpField = document.getElementById('otp-password');
    otpField.disabled = true;
    otpField.value = '';

    // hide verify otp button
    verifyOTPPassword.style.display = 'none';

    // enable save password button
    save_password.disabled = false;
    save_password.style.backgroundColor = '#c2272d';
});

// save password handler
const savePasswordBtn = document.getElementById('save-password');
savePasswordBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // Password regex
    // Password must contain at least 8 alphanumeric characters
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

    // get password and confirm password
    const password = document.getElementById('password').value.trim();
    const confirm_password = document.getElementById('confirm-password').value.trim();
    const error_msg = document.getElementById('update-password-guide');
    error_msg.style.color = '#c2272d';

    if (password === '' || confirm_password === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (!passwordRegex.test(password)) {
        error_msg.innerHTML = 'Password must contain at least 8 alphanumeric characters';
        return;
    }

    if (password !== confirm_password) {
        error_msg.innerHTML = 'Passwords do not match';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Password updated successfully!';
});

// <----------------- Update Driving License Handlers ----------------->
// update driving license handler
const saveLicenseBtn = document.getElementById('save-license');
saveLicenseBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // get driving license
    const license = document.getElementById('license').value.trim();
    const error_msg = document.getElementById('update-license-guide');
    error_msg.innerHTML = '';
    error_msg.style.color = '#c2272d';
    

    if (license === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Driving license updated successfully!<br/>Your driving license will be verified by our staff after you make a reservation.';
});

// <----------------- Update Payment Handlers ----------------->
// update payment handler
const savePaymentBtn = document.getElementById('save-payment');
savePaymentBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // only validate cvv / cvc
    const cvvRegex = /^[0-9]{3,4}$/;

    // get cvv
    const cvv = document.getElementById('cvv').value.trim();
    const error_msg = document.getElementById('update-payment-guide');

    error_msg.style.color = '#c2272d';

    if (cvv === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (!cvvRegex.test(cvv)) {
        error_msg.innerHTML = 'Invalid CVV';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Payment information updated successfully!';

});