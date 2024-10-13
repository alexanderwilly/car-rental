const user = new Customer ("Jamie Lie",
    "01/01/1990",
    "123 Lorong Chuan,<br/>Singapore, Singapore 123456", 
    "customer1@gmail.com", 
    "+65 8987 6543", 
    "096a634ebef7363da45157c18a4afb7ed6c62a322f452a51d4d1cd834c4a437b", 
    "VISA-9876",
    "666F", true);

const reservation = new Reservation(
    "SGNE-01234567", 
    "customer1@gmail.com", 
    "15 October 2024", 
    "20 October 2024", 
    "Reserved", 
    500.00, 
    "AZoom Car Rental - Sengkang Branch,<br/>28 Sengkang Square, Singapore 027028", 
    "AZoom Car Rental - Sengkang Branch,<br/>28 Sengkang Square, Singapore 027028", 
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

const rental_address = document.getElementById('rental-address');
const customer_name = document.getElementById('customer-name');
const customer_address = document.getElementById('customer-address');
const customer_number = document.getElementById('customer-number');

if(rental_address && customer_name && customer_address && customer_number){
    rental_address.innerHTML = reservation.getReturnLocation();
    customer_name.innerHTML = user.getFullName();
    customer_address.innerHTML = user.getAddress();
    customer_number.innerHTML = user.getPhone();
}

const invoice_id = document.getElementById('invoice-id');
const invoice_date = document.getElementById('invoice-date');
const due_date = document.getElementById('due-date');

if(invoice_id && invoice_date && due_date){
    invoice_id.innerHTML = `INV-${Math.floor(Math.random() * 100000000)}`;
    invoice_date.innerHTML = reservation.getEndDate();
    due_date.innerHTML = reservation.getPaymentDueDate();  
}


const duration = document.getElementById('duration');
const ratePerDay = document.getElementById('ratePerDay');
const total = document.getElementById('total');


if(duration && ratePerDay && total){
    duration.innerHTML = reservation.duration();
    ratePerDay.innerHTML = reservation.getVehicle().getDailyRate().toFixed(2);
    total.innerHTML = reservation.getEstFee().toFixed(2);
}

const total_amount = document.getElementById('total-amount');

if(total_amount){
    
    total_amount.innerHTML = `SG$ ${reservation.getTotalAmount().toFixed(2)}`;
}

const back_btn = document.getElementById('back-btn');
const pay_now_btn = document.getElementById('pay-now-btn');

back_btn.innerHTML = "Back";
back_btn.addEventListener('click', () => {
    window.history.back();
});

pay_now_btn.innerHTML = "Pay Now";
pay_now_btn.addEventListener('click', () => {
    alert(`Payment Successful with card ${user.getCard()}`);
    back_btn.innerHTML = "Done";
    back_btn.addEventListener('click', () => {
        window.location.href = '../history.html';
    });
    pay_now_btn.innerHTML = "Print Receipt";
    pay_now_btn.disabled = true;

});


