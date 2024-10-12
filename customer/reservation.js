const view_reservation_btn = document.getElementById('view-reservation-btn');
view_reservation_btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './reservation/view_reservation.html';
});