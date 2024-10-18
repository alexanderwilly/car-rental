const reservation = [new Reservation(
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
    )
)];


const arrow_left = document.getElementById('arrow-left');
const arrow_right = document.getElementById('arrow-right');
const select_date = document.getElementById('select-date');

// get select_date initial value from 15 october 2024 gmt+8 to 15/10/2024
let date = new Date(Date.UTC(2024, 9, 20));
date.setUTCHours(date.getUTCHours() + 8);

select_date.value = date.toISOString().split('T')[0];



// add event listener to arrow_left
arrow_left.addEventListener('click', () => {
    date.setUTCDate(date.getUTCDate() - 1);
    select_date.value = date.toISOString().split('T')[0];
});

// add event listener to arrow_right
arrow_right.addEventListener('click', () => {
    date.setUTCDate(date.getUTCDate() + 1);
    select_date.value = date.toISOString().split('T')[0];
});
