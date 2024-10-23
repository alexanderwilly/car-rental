const reservation = new Reservation(
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
);

reservation.setStatus(localStorage.getItem('status') || reservation.getStatus());


const user = new Customer ("Jamie Lie",
    "01/01/1990",
    "123 Lorong Chuan, <br/>Singapore, Singapore 123456", 
    "customer1@gmail.com", 
    "+65 8987 6543", 
    "096a634ebef7363da45157c18a4afb7ed6c62a322f452a51d4d1cd834c4a437b", 
    "VISA-9876",
    "666F", true);



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
const customerName = document.getElementById('customerName');
const customerEmail = document.getElementById('customerEmail');
const customerPhone = document.getElementById('customerPhone');


if (reservationId !== null){
    reservationId.innerHTML = reservation.getReservationId();
    carImg.src = reservation.getVehicle().getImage();
    startDate.innerHTML = new Date(reservation.getStartDate()).toLocaleString('en-SG', {day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'});;
    endDate.innerHTML = new Date(reservation.getEndDate()).toLocaleString('en-SG', {day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'});;
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
    customerName.innerHTML = user.getFullName();
    customerEmail.innerHTML = user.getEmail();
    customerPhone.innerHTML = user.getPhone();
}

const body_condition = document.getElementById('body-condition');
const body_condition_img = document.getElementById('body-condition-img');
const headlights = document.getElementById('headlights');
const headlights_img = document.getElementById('headlights-img');
const taillights = document.getElementById('taillights');
const taillights_img = document.getElementById('taillights-img');
const turn_signals = document.getElementById('turn-signals');
const turn_signals_img = document.getElementById('turn-signals-img');
const brake_lights = document.getElementById('brake-lights');
const brake_lights_img = document.getElementById('brake-lights-img');
const tires = document.getElementById('tires');
const tires_img = document.getElementById('tires-img');
const wheels = document.getElementById('wheels');
const wheels_img = document.getElementById('wheels-img');
const mirrors = document.getElementById('mirrors');
const mirrors_img = document.getElementById('mirrors-img');
const windows = document.getElementById('windows');
const windows_img = document.getElementById('windows-img');
const windshield = document.getElementById('windshield');
const windshield_img = document.getElementById('windshield-img');
const wipers = document.getElementById('wipers');
const wipers_img = document.getElementById('wipers-img');

const seatsCondition = document.getElementById('seatsCondition');
const seatsCondition_img = document.getElementById('seatsCondition-img');
const seat_belts = document.getElementById('seat-belts');
const seat_belts_img = document.getElementById('seat-belts-img');
const radio = document.getElementById('radio');
const radio_img = document.getElementById('radio-img');
const air_conditioning = document.getElementById('air-conditioning');
const air_conditioning_img = document.getElementById('air-conditioning-img');
const heater = document.getElementById('heater');
const heater_img = document.getElementById('heater-img');
const dashboard = document.getElementById('dashboard');
const dashboard_img = document.getElementById('dashboard-img');
const horn = document.getElementById('horn');
const horn_img = document.getElementById('horn-img');
const doors = document.getElementById('doors');
const doors_img = document.getElementById('doors-img');

const engine = document.getElementById('engine');
const engine_img = document.getElementById('engine-img');
const brakes = document.getElementById('brakes');
const brakes_img = document.getElementById('brakes-img');
const steering = document.getElementById('steering');
const steering_img = document.getElementById('steering-img');
const fuel = document.getElementById('fuel');
const fuel_img = document.getElementById('fuel-img');

const inspection_agreement = document.getElementById('inspection-agreement');
if (reservation.getStatus() === "Reserved"){
    inspection_agreement.innerHTML = `
    <input type = "checkbox" id = "agreement" name = "agreement" value = "agreement">
    <label for = "agreement">I agree that I will return the car in the same condition as it is stated above and I will be responsible for any damages of the car.</label> <br/> <br/>
    `;
}

if (reservation.getStatus() === "Renting In-Progress"){
    inspection_agreement.innerHTML = `
    <input type = "checkbox" id = "confirmation" name = "confirmation" value = "confirmation">
    <label for = "confirmation">I have acknowledged that the returned car has been inspected thoroughly with the conditions stated above which are true and accurate.</label> <br/> <br/>
    `;
}

const agreement = document.getElementById('agreement');
const confirmation = document.getElementById('confirmation');

const error_msg = document.getElementById('error-msg');


const back_btn = document.getElementById('back-btn');
if (back_btn){
    back_btn.addEventListener('click', () => {
        window.location.href = '../reservation.html';
    });
}

const submit_btn = document.getElementById('submit-btn');
if(submit_btn){
    submit_btn.addEventListener('click', () => {
        error_msg.innerHTML = "";
    
        if(reservation.getStatus() === "Reserved"){

            // Reserved
            // Checklist must all checked and photos uploaded
            if(!body_condition.checked || !headlights.checked || !taillights.checked || !turn_signals.checked || !brake_lights.checked || !tires.checked || !wheels.checked || !mirrors.checked || !windows.checked || !windshield.checked || !wipers.checked || !seatsCondition.checked || !seat_belts.checked || !radio.checked || !air_conditioning.checked || !heater.checked || !dashboard.checked || !horn.checked || !doors.checked || !engine.checked || !brakes.checked || !steering.checked || !fuel.checked){
                error_msg.style.color = "red";
                error_msg.innerHTML = "Please ensure all checklist are checked.";
                return;
            }

            if(body_condition_img.files.length === 0 || headlights_img.files.length === 0 || taillights_img.files.length === 0 || turn_signals_img.files.length === 0 || brake_lights_img.files.length === 0 || tires_img.files.length === 0 || wheels_img.files.length === 0 || mirrors_img.files.length === 0 || windows_img.files.length === 0 || windshield_img.files.length === 0 || wipers_img.files.length === 0 || seatsCondition_img.files.length === 0 || seat_belts_img.files.length === 0 || radio_img.files.length === 0 || air_conditioning_img.files.length === 0 || heater_img.files.length === 0 || dashboard_img.files.length === 0 || horn_img.files.length === 0 || doors_img.files.length === 0 || engine_img.files.length === 0 || brakes_img.files.length === 0 || steering_img.files.length === 0 || fuel_img.files.length === 0){
                error_msg.style.color = "red";
                error_msg.innerHTML = "Please upload all photos.";
                return;
            }

            // check if confirmation is checked
            if(!agreement.checked){
                error_msg.style.color = "red";
                error_msg.innerHTML = "Please agree to the agreement.";
                return;
            }

            reservation.setStatus("Renting In-Progress");
            error_msg.innerHTML = "Successfully updated the reservation status to 'Renting In-Progress'.<br/>Redirecting to reservation page...";

        }else if ( reservation.getStatus() === "Renting In-Progress"){
            // In-Progress
            if(body_condition_img.files.length === 0 || headlights_img.files.length === 0 || taillights_img.files.length === 0 || turn_signals_img.files.length === 0 || brake_lights_img.files.length === 0 || tires_img.files.length === 0 || wheels_img.files.length === 0 || mirrors_img.files.length === 0 || windows_img.files.length === 0 || windshield_img.files.length === 0 || wipers_img.files.length === 0 || seatsCondition_img.files.length === 0 || seat_belts_img.files.length === 0 || radio_img.files.length === 0 || air_conditioning_img.files.length === 0 || heater_img.files.length === 0 || dashboard_img.files.length === 0 || horn_img.files.length === 0 || doors_img.files.length === 0 || engine_img.files.length === 0 || brakes_img.files.length === 0 || steering_img.files.length === 0 || fuel_img.files.length === 0){
                error_msg.style.color = "red";
                error_msg.innerHTML = "Please upload all photos.";
                return;
            }

            // check if confirmation is checked
            if(!confirmation.checked){
                error_msg.style.color = "red";
                error_msg.innerHTML = "Please acknowledge the confirmation.";
                return;
            }

            // If some inspection checklist are empty, remarks is required
            if(!body_condition.checked || !headlights.checked || !taillights.checked || !turn_signals.checked || !brake_lights.checked || !tires.checked || !wheels.checked || !mirrors.checked || !windows.checked || !windshield.checked || !wipers.checked || !seatsCondition.checked || !seat_belts.checked || !radio.checked || !air_conditioning.checked || !heater.checked || !dashboard.checked || !horn.checked || !doors.checked || !engine.checked || !brakes.checked || !steering.checked || !fuel.checked){
                if (document.getElementById('remarks').value === ""){
                    error_msg.style.color = "red";
                    error_msg.innerHTML = "Please provide remarks for the unchecked inspection checklist.";
                    return;
                }
            }

            reservation.setStatus("Pending Payment");
            error_msg.innerHTML = "Successfully updated the reservation status to 'Pending Payment'.<br/>Redirecting to reservation page...";
        }
        
        error_msg.style.color = "green";
        setInterval(() => {
            window.location.href = reservation.getStatus() === "Pending Payment" ? '../car_return.html' : '../reservation.html';
        } , 1000);
    });
}
