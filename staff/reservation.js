const r1 = [new Reservation(
    "SGNE-01234567", 
    "customer1@gmail.com", 
    new Date("15 December 2024 09:00"), 
    new Date("20 December 2024 09:00"),
    "Reserved",
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
    )),
];

function loadReservations(date, idsearch) {
    const r = document.getElementById('reservations');

    // filter by date
    const filteredReservations = r1.filter(reservation => {
        return reservation.getStartDate().toDateString() === date.toDateString() 
        && (idsearch === undefined || reservation.getReservationId().toLowerCase().includes(idsearch.toLowerCase()) || reservation.getEmail().toLowerCase().includes(idsearch.toLowerCase()));
    });

    let reservationHTML = '';

    // display reservations
    filteredReservations.forEach(reservation => {
        reservationHTML += `
        <div class = "reservation-card">
            <div>
                <h3>Reservation ID: ${reservation.getReservationId()}</h3>
                <div>
                    <span>
                        <h5>Car:</h5>
                        <h6 id = "car">${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}</h6>
                    </span>
                    <span>
                        <h5>Start Date:</h5>
                        <h6 id = "startDate">${new Date(reservation.getStartDate()).toLocaleString('en-SG', {day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</h6>
                    </span>
                    <span>
                        <h5>End Date:</h5>
                        <h6 id = "endDate">${new Date(reservation.getEndDate()).toLocaleString('en-SG', {day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</h6>
                    </span>
                </div>
            </div>
            
            <button id = "view-reservation-btn-${reservation.getReservationId()}">View</button>
        </div>
        `;
    });
    
    r.innerHTML = reservationHTML === '' ? '<h4>No reservation found.</h4>' : reservationHTML;
}


const search = document.getElementById('search_icon');
const search_input = document.getElementById('search-bar');

search.addEventListener('click', () => {
    loadReservations(date, search_input.value);
    const view_reservation_btn = document.getElementById('view-reservation-btn-SGNE-01234567');
    view_reservation_btn.addEventListener('click',(event)=>{
        event.preventDefault();
        localStorage.setItem('status', 'Reserved');
        window.location.href = "reservation/reservation_details.html";
    });
});


const arrow_left = document.getElementById('arrow-left');
const arrow_right = document.getElementById('arrow-right');
const select_date = document.getElementById('select-date');

// get select_date initial value from 15 December 2024 gmt+8 to 15/10/2024
let date = new Date(Date.UTC(2024, 11, 15));
date.setUTCHours(date.getUTCHours() + 8);

select_date.value = date.toISOString().split('T')[0];

// add event listener to arrow_left
arrow_left.addEventListener('click', () => {
    date.setUTCDate(date.getUTCDate() - 1);
    select_date.value = date.toISOString().split('T')[0];

    loadReservations(date, search_input.value);
    const view_reservation_btn = document.getElementById('view-reservation-btn-SGNE-01234567');
    view_reservation_btn.addEventListener('click',(event)=>{
        event.preventDefault();
        localStorage.setItem('status', 'Reserved');
        window.location.href = "reservation/reservation_details.html";
    });
});

// add event listener to arrow_right
arrow_right.addEventListener('click', () => {
    date.setUTCDate(date.getUTCDate() + 1);
    select_date.value = date.toISOString().split('T')[0];

    loadReservations(date, search_input.value);
    const view_reservation_btn = document.getElementById('view-reservation-btn-SGNE-01234567');
    view_reservation_btn.addEventListener('click',(event)=>{
        event.preventDefault();
        localStorage.setItem('status', 'Reserved');
        window.location.href = "reservation/reservation_details.html";
    });
});



loadReservations(date, search_input.value);

const view_reservation_btn = document.getElementById('view-reservation-btn-SGNE-01234567');
view_reservation_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    localStorage.setItem('status', 'Reserved');
    window.location.href = "reservation/reservation_details.html";
});