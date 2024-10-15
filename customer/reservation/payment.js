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

reservation.addAdditionalPayment("Scratch Found", '-', 1 ,50.00);
reservation.addAdditionalPayment("Broken Side Mirror", '-', 1 ,100.00);
reservation.addAdditionalPayment("Broken Headlight", '-', 1 ,150.00);

const rental_address = document.getElementById('rental-address');
const customer_name = document.getElementById('customer-name');
const customer_address = document.getElementById('customer-address');
const customer_number = document.getElementById('customer-number');

if(rental_address){
    rental_address.innerHTML = reservation.getReturnLocation();
}

if (customer_name){
    customer_name.innerHTML = user.getFullName();
}

if(customer_address){
    customer_address.innerHTML = user.getAddress();
}

if(customer_number){
    customer_number.innerHTML = user.getPhone();
}


const invoice_id = document.getElementById('invoice-id');
const invoice_date = document.getElementById('invoice-date');
const due_date = document.getElementById('due-date');
const pay_date = document.getElementById('pay-date');
const payment_method = document.getElementById('payment-method');

if (invoice_id){
    invoice_id.innerHTML = `INV-12121212`;
}

if(invoice_date && due_date){
    invoice_date.innerHTML = reservation.getEndDate();
    due_date.innerHTML = reservation.getPaymentDueDate();  
}

if(pay_date && payment_method){
    pay_date.innerHTML = reservation.getPaymentDate();
    payment_method.innerHTML = user.getCard();
}





const payment_breakdown = document.getElementById('payment-breakdown');
if(payment_breakdown){
    payment_breakdown.innerHTML = `
    <tr>
        <td>
            <h3>Item</h3>
        </td>
        <td>
            <h3>Quantity</h3>
        </td>
        <td>
            <h3>Rate (SG$)</h3>
        </td>
        <td>
            <h3>Amount (SG$)</h3>
        </td>
    </tr>
    <tr>
        <td>
            <h6>Car Rental Fee</h6>
        </td>
        <td>
            <h6 id = "duration"></h6>
            <span>day(s)</span>
        </td>
        <td>
            <h6 id = "ratePerDay"></h6>
            <span>per day</span>
        </td>
        <td>
            <h6 id = "total"></h6>
        </td>
    </tr>
    `;

    reservation.getAdditionalPayment().forEach((payment) => {
        const newRow = document.createElement('tr');
        
        const amount = payment.qty * payment.fee;
        newRow.innerHTML = `
            <td>${payment.remarks}</td>
            <td>${payment.qty}</td>
            <td>${payment.fee.toFixed(2)}</td>
            <td>${amount.toFixed(2)}</td>
        `;

        payment_breakdown.appendChild(newRow);
    });

    payment_breakdown.innerHTML += `
    <tr rowspan = "2">
        <td colspan = "3">
            <h3>Total Amount (include GST 9%)</h3>
        </td>
        <td>
            <h3 id = 'total-amount'></h3>
        </td>
    </tr>   `;

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
const done_btn = document.getElementById('done-btn');
const pay_now_btn = document.getElementById('pay-now-btn');
const receipt_btn = document.getElementById('receipt-btn');

if(back_btn){
    back_btn.addEventListener('click', () => {
        window.history.back();
    });
}

if(done_btn){
    done_btn.addEventListener('click', () => {
        window.location.href = "../history.html";
    });
}

if (receipt_btn){
    receipt_btn.addEventListener('click', () => {
        window.location.href = "receipt.html";
    });
}

if (pay_now_btn){
    pay_now_btn.addEventListener('click', () => {
        alert(`Payment successful using ${user.getCard()}`); 
        back_btn.style.display = 'none';
        done_btn.style.display = 'block';
        pay_now_btn.style.display = 'none';
        receipt_btn.style.display = 'block';
    });
}

const done_btn_receipt = document.getElementById('done-btn-receipt');
if (done_btn_receipt){
    done_btn_receipt.addEventListener('click', () => {
        window.location.href = "../history.html";
    });
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


const rental_address_2 = document.getElementById('rental-address-2');
const invoice_id_2 = document.getElementById('invoice-id-2');
const pay_date_2 = document.getElementById('pay-date-2');
const payment_breakdown_2 = document.getElementById('payment-breakdown-2');

if(pay_date_2 && payment_method){
    pay_date_2.innerHTML = reservation.getPaymentDate();
    payment_method.innerHTML = user.getCard();
}

if(rental_address_2 && invoice_id_2 && pay_date_2 && payment_breakdown_2){
    rental_address_2.innerHTML = reservation5b.getReturnLocation();
    invoice_id_2.innerHTML = `INV-49494949`;
    pay_date_2.innerHTML = reservation5b.getPaymentDate();

    payment_breakdown_2.innerHTML = `
    <tr>
        <td>
            <h3>Item</h3>
        </td>
        <td>
            <h3>Quantity</h3>
        </td>
        <td>
            <h3>Rate (SG$)</h3>
        </td>
        <td>
            <h3>Amount (SG$)</h3>
        </td>
    </tr>
    <tr>
        <td>
            <h6>Car Rental Fee</h6>
        </td>
        <td>
            <h6 id = "duration-2"></h6>
            <span>day(s)</span>
        </td>
        <td>
            <h6 id = "ratePerDay-2"></h6>
            <span>per day</span>
        </td>
        <td>
            <h6 id = "total-2"></h6>
        </td>
    </tr>
    `;

    reservation5b.getAdditionalPayment().forEach((payment) => {
        const newRow = document.createElement('tr');
        
        const amount = payment.qty * payment.fee;
        newRow.innerHTML = `
            <td>${payment.remarks}</td>
            <td>${payment.qty}</td>
            <td>${payment.fee.toFixed(2)}</td>
            <td>${amount.toFixed(2)}</td>
        `;

        payment_breakdown_2.appendChild(newRow);
    });

    payment_breakdown_2.innerHTML += `
    <tr rowspan = "2">
        <td colspan = "3">
            <h3>Total Amount (include GST 9%)</h3>
        </td>
        <td>
            <h3 id = 'total-amount-2'></h3>
        </td>
    </tr>   `;



}

const duration_2 = document.getElementById('duration-2');
const ratePerDay_2 = document.getElementById('ratePerDay-2');
const total_2 = document.getElementById('total-2');
const total_amount_2 = document.getElementById('total-amount-2');

if(duration_2 && ratePerDay_2 && total_2 && total_amount_2){
    duration_2.innerHTML = reservation5b.duration();
    ratePerDay_2.innerHTML = reservation5b.getVehicle().getDailyRate().toFixed(2);
    total_2.innerHTML = reservation5b.getEstFee().toFixed(2);
    total_amount_2.innerHTML = `SG$ ${reservation5b.getTotalAmount().toFixed(2)}`;
}




