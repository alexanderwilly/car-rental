const reservation = new Reservation(
    "SGNE-01234567", 
    "customer1@gmail.com", 
    "15 October 2024", 
    "20 October 2024", 
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
);
reservation.addAdditionalPayment("Scratch Found", '-', 1 ,50.00);
reservation.addAdditionalPayment("Broken Side Mirror", '-', 1 ,100.00);
reservation.addAdditionalPayment("Broken Headlight", '-', 1 ,150.00);



const reservationId = document.getElementById('reservationId');
const carImg = document.getElementById('carImg');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const stat = document.getElementById('status'); 
const estFee = document.getElementById('estFee');
const pickupLocation = document.getElementById('pickupLocation');
const returnLocation = document.getElementById('returnLocation');
const carName = document.getElementById('carName');
const carType = document.getElementById('carType');
const bootSpace = document.getElementById('bootSpace');
const seats = document.getElementById('seats');
const fuelCap = document.getElementById('fuelCap');
const fuelConsumption = document.getElementById('fuelConsumption');


if (reservationId !== null){
    reservationId.innerHTML = reservation.getReservationId();
    carImg.src = reservation.getVehicle().getImage();
    startDate.innerHTML = reservation.getStartDate();
    endDate.innerHTML = reservation.getEndDate();
    stat.innerHTML = reservation.getStatus();
    estFee.innerHTML = `SG$ ${reservation.getEstFee().toFixed(2)}`;
    pickupLocation.innerHTML = reservation.getPickupLocation();
    returnLocation.innerHTML = reservation.getReturnLocation();
    carName.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    carType.innerHTML = reservation.getVehicle().getType();
    bootSpace.innerHTML = reservation.getVehicle().getBootSpace();
    seats.innerHTML = `${reservation.getVehicle().getSeats()} Seater`;
    fuelCap.innerHTML = `${reservation.getVehicle().getFuelTankCapacity()} Litres`;
    fuelConsumption.innerHTML = `${reservation.getVehicle().getFuelConsumption()} (L/100km)`;
}

const reservationId3 = document.getElementById('reservationId3');
const carImg3 = document.getElementById('carImg3');
const startDate3 = document.getElementById('startDate3');
const endDate3 = document.getElementById('endDate3');
const stat3 = document.getElementById('status3');
const estFee3 = document.getElementById('estFee3');
const pickupLocation3 = document.getElementById('pickupLocation3');
const returnLocation3 = document.getElementById('returnLocation3');
const carName3 = document.getElementById('carName3');
const carType3 = document.getElementById('carType3');
const bootSpace3 = document.getElementById('bootSpace3');
const seats3 = document.getElementById('seats3');
const fuelCap3 = document.getElementById('fuelCap3');
const fuelConsumption3 = document.getElementById('fuelConsumption3');

if (reservationId3 !== null){
    reservationId3.innerHTML = reservation.getReservationId();
    carImg3.src = reservation.getVehicle().getImage();
    startDate3.innerHTML = reservation.getStartDate();
    endDate3.innerHTML = reservation.getEndDate();
    reservation.setStatus("Renting In-Progress");
    stat3.innerHTML = reservation.getStatus();
    estFee3.innerHTML = `SG$ ${reservation.getEstFee().toFixed(2)}`;
    pickupLocation3.innerHTML = reservation.getPickupLocation();
    returnLocation3.innerHTML = reservation.getReturnLocation();
    carName3.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    carType3.innerHTML = reservation.getVehicle().getType();
    bootSpace3.innerHTML = reservation.getVehicle().getBootSpace();
    seats3.innerHTML = `${reservation.getVehicle().getSeats()} Seater`;
    fuelCap3.innerHTML = `${reservation.getVehicle().getFuelTankCapacity()} Litres`;
    fuelConsumption3.innerHTML = `${reservation.getVehicle().getFuelConsumption()} (L/100km)`;
}

const reservationId4 = document.getElementById('reservationId4');
const carImg4 = document.getElementById('carImg4');
const startDate4 = document.getElementById('startDate4');
const endDate4 = document.getElementById('endDate4');
const stat4 = document.getElementById('status4');
const estFee4 = document.getElementById('estFee4');
const pickupLocation4 = document.getElementById('pickupLocation4');
const returnLocation4 = document.getElementById('returnLocation4');
const carName4 = document.getElementById('carName4');
const carType4 = document.getElementById('carType4');
const bootSpace4 = document.getElementById('bootSpace4');
const seats4 = document.getElementById('seats4');
const fuelCap4 = document.getElementById('fuelCap4');
const fuelConsumption4 = document.getElementById('fuelConsumption4');
const paymentDueDate = document.getElementById('payment-due-date');

if (reservationId4 !== null){
    reservationId4.innerHTML = reservation.getReservationId();
    carImg4.src = reservation.getVehicle().getImage();
    startDate4.innerHTML = reservation.getStartDate();
    endDate4.innerHTML = reservation.getEndDate();
    reservation.setStatus("Pending Payment");
    stat4.innerHTML = reservation.getStatus();
    estFee4.innerHTML = `SG$ ${reservation.getTotalAmount().toFixed(2)}`;
    pickupLocation4.innerHTML = reservation.getPickupLocation();
    returnLocation4.innerHTML = reservation.getReturnLocation();
    carName4.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    carType4.innerHTML = reservation.getVehicle().getType();
    bootSpace4.innerHTML = reservation.getVehicle().getBootSpace();
    seats4.innerHTML = `${reservation.getVehicle().getSeats()} Seater`;
    fuelCap4.innerHTML = `${reservation.getVehicle().getFuelTankCapacity()} Litres`;
    fuelConsumption4.innerHTML = `${reservation.getVehicle().getFuelConsumption()} (L/100km)`;
    paymentDueDate.innerHTML = reservation.getPaymentDueDate();

}


const reservationId5a = document.getElementById('reservationId5a');
const carImg5a = document.getElementById('carImg5a');
const startDate5a = document.getElementById('startDate5a');
const endDate5a = document.getElementById('endDate5a');
const stat5a = document.getElementById('status5a');
const estFee5a = document.getElementById('estFee5a');
const pickupLocation5a = document.getElementById('pickupLocation5a');
const returnLocation5a = document.getElementById('returnLocation5a');
const carName5a = document.getElementById('carName5a');
const carType5a = document.getElementById('carType5a');
const bootSpace5a = document.getElementById('bootSpace5a');
const seats5a = document.getElementById('seats5a');
const fuelCap5a = document.getElementById('fuelCap5a');
const fuelConsumption5a = document.getElementById('fuelConsumption5a');
const payment_date = document.getElementById('payment-date');

if (reservationId5a !== null){
    reservationId5a.innerHTML = reservation.getReservationId();
    carImg5a.src = reservation.getVehicle().getImage();
    startDate5a.innerHTML = reservation.getStartDate();
    endDate5a.innerHTML = reservation.getEndDate();
    reservation.setStatus("Completed");
    stat5a.innerHTML = reservation.getStatus();
    estFee5a.innerHTML = `SG$ ${reservation.getTotalAmount().toFixed(2)}`;
    pickupLocation5a.innerHTML = reservation.getPickupLocation();
    returnLocation5a.innerHTML = reservation.getReturnLocation();
    carName5a.innerHTML = `${reservation.getVehicle().getBrand()} ${reservation.getVehicle().getModel()}`;
    carType5a.innerHTML = reservation.getVehicle().getType();
    bootSpace5a.innerHTML = reservation.getVehicle().getBootSpace();
    seats5a.innerHTML = `${reservation.getVehicle().getSeats()} Seater`;
    fuelCap5a.innerHTML = `${reservation.getVehicle().getFuelTankCapacity()} Litres`;
    fuelConsumption5a.innerHTML = `${reservation.getVehicle().getFuelConsumption()} (L/100km)`;
    payment_date.innerHTML = reservation.getPaymentDate();
}

const reservation5b = new Reservation(
    "SGNO-87654321", 
    "customer1@gmail.com", 
    "15 June 2024", 
    "20 July 2024", 
    "Completed",
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

const reservationId5b = document.getElementById('reservationId5b');
const carImg5b = document.getElementById('carImg5b');
const startDate5b = document.getElementById('startDate5b');
const endDate5b = document.getElementById('endDate5b');
const stat5b = document.getElementById('status5b');
const estFee5b = document.getElementById('estFee5b');
const pickupLocation5b = document.getElementById('pickupLocation5b');
const returnLocation5b = document.getElementById('returnLocation5b');
const carName5b = document.getElementById('carName5b');
const carType5b = document.getElementById('carType5b');
const bootSpace5b = document.getElementById('bootSpace5b');
const seats5b = document.getElementById('seats5b');
const fuelCap5b = document.getElementById('fuelCap5b');
const fuelConsumption5b = document.getElementById('fuelConsumption5b');
const payment_date5b = document.getElementById('payment-date5b');

if (reservationId5b !== null){
    reservationId5b.innerHTML = reservation5b.getReservationId();
    carImg5b.src = reservation5b.getVehicle().getImage();
    startDate5b.innerHTML = reservation5b.getStartDate();
    endDate5b.innerHTML = reservation5b.getEndDate();
    stat5b.innerHTML = reservation5b.getStatus();
    estFee5b.innerHTML = `SG$ ${reservation5b.getTotalAmount().toFixed(2)}`;
    pickupLocation5b.innerHTML = reservation5b.getPickupLocation();
    returnLocation5b.innerHTML = reservation5b.getReturnLocation();
    carName5b.innerHTML = `${reservation5b.getVehicle().getBrand()} ${reservation5b.getVehicle().getModel()}`;
    carType5b.innerHTML = reservation5b.getVehicle().getType();
    bootSpace5b.innerHTML = reservation5b.getVehicle().getBootSpace();
    seats5b.innerHTML = `${reservation5b.getVehicle().getSeats()} Seater`;
    fuelCap5b.innerHTML = `${reservation5b.getVehicle().getFuelTankCapacity()} Litres`;
    fuelConsumption5b.innerHTML = `${reservation5b.getVehicle().getFuelConsumption()} (L/100km)`;
    payment_date5b.innerHTML = reservation5b.getPaymentDate();
}





const back_btn = document.getElementById('back-btn');
if (back_btn){
    back_btn.addEventListener('click', () => {
        window.location.href = '../reservation2.html';
    });
}

const back_btn_3 = document.getElementById('back-btn-3');
if (back_btn_3){
    back_btn_3.addEventListener('click', () => {
        window.location.href = '../reservation3.html';
    });
}

const back_btn_4 = document.getElementById('back-btn-4');
if (back_btn_4){
    back_btn_4.addEventListener('click', () => {
        window.location.href = '../reservation4.html';
    });
}

const back_btn_5 = document.getElementById('back-btn-5');
if (back_btn_5){
    back_btn_5.addEventListener('click', () => {
        window.location.href = "../history.html"
    });
}



const cancel_btn = document.getElementById('cancel-btn');
if(cancel_btn){
    cancel_btn.addEventListener('click', () => {
        window.location.href = '../reservation.html';
    });
}

const pay_btn = document.getElementById('pay-btn');
if (pay_btn){
    pay_btn.addEventListener('click', () => {
        window.location.href = 'payment.html';
    });
}

const receipt_btn_5a = document.getElementById('receipt-btn-5a');
if (receipt_btn_5a){
    receipt_btn_5a.addEventListener('click', () => {
        window.location.href = 'receipt5a.html';
    });
}