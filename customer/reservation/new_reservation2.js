let car = JSON.parse(localStorage.getItem('car'));
car = new Vehicle(car._vehicleId, car._image, car._brand, car._model, car._type, car._bootSpace, car._seats, car._fuelTankCapacity, car._fuelConsumption, car._dailyRate);

const pick_up_location = document.getElementById('pick-up-location');
const return_location = document.getElementById('return-location');
const isSameLocation = document.getElementById('isSameLocation');
isSameLocation.addEventListener('change', () => {
    return_location.disabled = isSameLocation.checked;
    return_location.value = pick_up_location.value;
});

pick_up_location.addEventListener('change', () => {
    if(isSameLocation.checked){
        return_location.value = pick_up_location.value;
    }
}   );

const startDateInput = document.getElementById('startDateInput');
const endDateInput = document.getElementById('endDateInput');
const estFee = document.getElementById('estFee');


startDateInput.addEventListener('change', () => {
    // end - start (days inclusive) * car price
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    estFee.innerText = 'SG$ ' + (days <= 0 || isNaN(days) ? '-' : (days * car.getDailyRate()).toFixed(2));
});

endDateInput.addEventListener('change', () => {
    // end - start (days inclusive) * car price
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const days = Math.floor( ((endDate - startDate) / (1000 * 60 * 60 * 24))+1);
    estFee.innerText = 'SG$ ' + (days <= 0 || isNaN(days) ? '-' : (days * car.getDailyRate().toFixed(2)));
});

const carImg = document.getElementById('carImg');
carImg.src = car.getImage();
const carName = document.getElementById('carName');
carName.innerText = car.getBrand() + ' ' + car.getModel();
const carType = document.getElementById('carType');
carType.innerText = car.getType();
const ratePerDay = document.getElementById('ratePerDay');
ratePerDay.innerText = 'SG$ ' + car.getDailyRate() + '/day';
const bootSpace = document.getElementById('bootSpace');
bootSpace.innerText = car.getBootSpace();
const seats = document.getElementById('seats');
seats.innerText = car.getSeats() + ' seats';
const fuelCap = document.getElementById('fuelCap');
fuelCap.innerText = car.getFuelTankCapacity() + ' L';
const fuelConsumption = document.getElementById('fuelConsumption');
fuelConsumption.innerText = car.getFuelConsumption() + ' km/L';

const back_btn = document.getElementById('back-btn');
back_btn.addEventListener('click', () => {
    window.location.href = 'new_reservation.html';
});

const error_msg = document.getElementById('error-msg');

const confirm_btn = document.getElementById('confirm-btn');
confirm_btn.addEventListener('click',()=>{
    error_msg.innerText = '';

    // check if all fields are filled
    if(pick_up_location.value === '' || return_location.value === '' || startDateInput.value === '' || endDateInput.value === ''){
        error_msg.innerText = 'Please fill in all fields';
        return;
    }

    // check if start date is before end date, and all date and time must be after now
    const now = new Date();
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    if(startDate < now || endDate < now || startDate >= endDate){
        error_msg.innerText = 'Invalid date and time';
        return;
    }

    // redirect to reservation
    window.location.href = '../reservation2.html';

})
