const logout = document.getElementById('logout-btn');
logout.addEventListener('click', () => {
    window.location.href = '../../index.html';
});

const back_btn = document.getElementById('back-btn');
back_btn.addEventListener('click', () => {
    window.location.href = '../reservation.html';
});

const cancel_btn = document.getElementById('cancel-btn');
cancel_btn.addEventListener('click', () => {
    window.location.href = '../reservation.html';
});