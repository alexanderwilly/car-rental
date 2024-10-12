// email regex
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// otp regex
const otp_regex = /^[0-9]{6}$/;



function verifyEmail(e) {
    e.preventDefault();
    

    const email = document.getElementById('email').value.trim();
    const otp = document.getElementById('OTP').value.trim();
    const error_msg = document.getElementById('error-msg');
    
    error_msg.style.color = 'red';

    //  otp example
    // in real world, this will be generated randomly and sent to the user's email
    const random_otp = '123456';

    if (email === '' || otp === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (!email_regex.test(email)) {
        error_msg.innerHTML = 'Invalid email';
        return;
    }

    if (otp !== random_otp || !otp_regex.test(otp)) {
        error_msg.innerHTML = 'Invalid OTP';
        return;
    }

    // redirect to reset password page
    window.location.href = 'reset_password.html';
}

function sendOTP(e){
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const error_msg = document.getElementById('error-msg');

    if (email === '') {
        error_msg.innerHTML = 'Please enter your email';
        return;
    }

    if (!email_regex.test(email)) {
        error_msg.innerHTML = 'Invalid email';
        return;
    }
    
    
    const OTP = document.getElementById('OTP');

    //enable otp field
    OTP.removeAttribute('disabled');

    // send otp to the user's email
    error_msg.style.color = 'black';
    error_msg.innerHTML = 'OTP sent to your email';
}



// Event Listeners
const next_button = document.getElementById('next-btn');
next_button.addEventListener('click',verifyEmail );

const send_otp_button = document.getElementById('send-otp-btn');
send_otp_button.addEventListener('click', sendOTP);