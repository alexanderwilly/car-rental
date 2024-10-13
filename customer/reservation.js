const reservation = new Reservation(
    "SGNE-01234567", 
    "customer1@gmail.com", 
    "15 October 2024", 
    "20 October 2024", 
    "Reserved", 
    500.00, 
    "AZ Car Rental - Sengkang Branch,<br/>28 Sengkang Square, Singapore 027028", 
    "AZ Car Rental - Sengkang Branch,<br/>28 Sengkang Square, Singapore 027028", 
    new Vehicle(
        "TYT-001", 
        "../../img/cars/toyota/prius.png", 
        "Toyota", 
        "Prius", 
        "Standard", 
        "1 large, 2 small luggages", 
        5, 
        43, 
        4.1, 
        100.00
    )
);


// Page 1
const new_reservation_btn = document.getElementById('new-reservation-btn');
if (new_reservation_btn !== null){
    new_reservation_btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './reservation/new_reservation1.html';
    });
}


// Page 2
const reservationId = document.getElementById('reservationId');
const car = document.getElementById('car');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const stat = document.getElementById('status');

if( reservationId !== null){
    reservationId.innerHTML = reservation.getReservationId();
    car.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    startDate.innerHTML = reservation.getStartDate();
    endDate.innerHTML = reservation.getEndDate();
    stat.innerHTML = reservation.getStatus();
}

const view_reservation_btn = document.getElementById('view-reservation-btn');
if (view_reservation_btn !== null){
    view_reservation_btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './reservation/view_reservation.html';
    });
}


// Page 3
const reservationId3 = document.getElementById('reservationId3');
const car3 = document.getElementById('car3');
const startDate3 = document.getElementById('startDate3');
const endDate3 = document.getElementById('endDate3');
const stat3 = document.getElementById('status3');

if (reservationId3 !== null){
    reservationId3.innerHTML = reservation.getReservationId();
    car3.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    startDate3.innerHTML = reservation.getStartDate();
    endDate3.innerHTML = reservation.getEndDate();
    reservation.setStatus("Renting In-Progress");
    stat3.innerHTML = reservation.getStatus();
}

const view_reservation_btn_3 = document.getElementById('view-reservation-btn-3');
if (view_reservation_btn_3 !== null){
    view_reservation_btn_3.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './reservation/view_reservation3.html';
    });
}


// Page 4
const reservationId4 = document.getElementById('reservationId4');
const car4 = document.getElementById('car4');
const startDate4 = document.getElementById('startDate4');
const endDate4 = document.getElementById('endDate4');
const stat4 = document.getElementById('status4');

if (reservationId4 !== null){
    reservationId4.innerHTML = reservation.getReservationId();
    car4.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    startDate4.innerHTML = reservation.getStartDate();
    endDate4.innerHTML = reservation.getEndDate();
    reservation.setStatus("Pending Payment");
    stat4.innerHTML = reservation.getStatus();
}

const view_reservation_btn_4 = document.getElementById('view-reservation-btn-4');
if (view_reservation_btn_4 !== null){
    view_reservation_btn_4.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './reservation/view_reservation4.html';
    });
}








