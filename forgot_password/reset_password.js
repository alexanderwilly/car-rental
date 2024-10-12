const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const error_msg = document.getElementById('error-msg');

function resetPassword(e) {
    e.preventDefault();

    // password regex, only allow alphanumeric characters
    const password_regex = /^[a-zA-Z0-9]+$/;
    
    if (password.value === '' || confirm_password.value === '') {
        error_msg.innerHTML = 'Please fill in all fields';
        return;
    }

    if (password.value.length < 8) {
        error_msg.innerHTML = 'Password must be at least 8 characters';
        return;
    }

    if (password.value !== confirm_password.value) {
        error_msg.innerHTML = 'Passwords do not match';
        return;
    }

    if (!password_regex.test(password.value)) {
        error_msg.innerHTML = 'Invalid password,<br/>only alphanumeric characters are allowed';
        return;
    }

    error_msg.style.color = 'green';
    error_msg.innerHTML = 'Password reset successfully';

    // timeout
    setTimeout(
        () => {window.location.href = '../login/login.html';}
        , 1000);
    
    
}

const submit_btn = document.getElementById('submit-btn'); 
submit_btn.addEventListener('click', resetPassword);