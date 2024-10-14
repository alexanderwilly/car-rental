const reservation1 = new Reservation(
    "SGNE-01234567", 
    "customer1@gmail.com", 
    "15 October 2024", 
    "20 October 2024", 
    "Payment Successful", 
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

const reservation2 = new Reservation(
    "SGNO-87654321", 
    "customer1@gmail.com", 
    "15 June 2024", 
    "20 July 2024", 
    "Payment Successful",
    "AZ Car Rental - Sengkang Branch,<br/>28 Sengkang Square, Singapore 027028",
    "AZ Car Rental - Woodlands Branch,<br/>21 Woodlands Drive 2, Singapore 020021", 
    new Vehicle(
        "HON-001", 
        "../../img/cars/honda/city.png", 
        "Honda", 
        "City", 
        "Standard", 
        "1 large, 1 small luggage", 
        5, 
        40, 
        5.6, 
        100.00
    )
);

const reservation_container = document.getElementById("reservation-container");
const reservations = [reservation1, reservation2];

reservations.forEach(reservation => {
    reservation_container.innerHTML += `
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
                    <h6 id = "startDate">${reservation.getStartDate()}</h6>
                </span>
                <span>
                    <h5>End Date:</h5>
                    <h6 id = "endDate">${reservation.getEndDate()}</h6>
                </span>
            </div>
        </div>
        
        <button id = "view-reservation-btn-${reservation.getReservationId()}">View</button>
    </div>
    `;
});

const view_reservation_btn1 = document.getElementById("view-reservation-btn-SGNE-01234567");
view_reservation_btn1.addEventListener("click", () => {
    window.location.href = "reservation/view_reservation5a.html";
});

const view_reservation_btn2 = document.getElementById("view-reservation-btn-SGNO-87654321");
view_reservation_btn2.addEventListener("click", () => {
    window.location.href = "reservation/view_reservation5b.html";
});