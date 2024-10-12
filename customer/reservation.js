const view_reservation_btn = document.getElementById('view-reservation-btn');
view_reservation_btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './reservation/view_reservation.html';
});

const new_reservation_btn = document.getElementById('new-reservation-btn');
new_reservation_btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './reservation/new_reservation1.html';
});