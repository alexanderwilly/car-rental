function createCarCard(car_obj) {
    const card = document.createElement('div');
    card.classList.add('card');

    const card_header = document.createElement('div');
    card_header.classList.add('card-header');

    const h6 = document.createElement('h6');
    h6.classList.add('card-car-type');
    h6.innerText = car_obj.getType();
    card_header.appendChild(h6);

    const h4 = document.createElement('h4');
    h4.classList.add('card-car-name');
    h4.innerText = car_obj.getBrand() + ' ' + car_obj.getModel();
    card_header.appendChild(h4);

    const h5 = document.createElement('h5');
    h5.classList.add('card-car-price');
    h5.innerText = 'SG$ ' + car_obj.getDailyRate() + '/day';
    card_header.appendChild(h5);

    card.appendChild(card_header);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = car_obj.getImage();
    card.appendChild(img);

    const select_btn = document.createElement('button');
    select_btn.classList.add('btn', 'btn-primary');
    select_btn.innerText = 'Select Car';
    select_btn.addEventListener('click', () => {
        localStorage.setItem('car', JSON.stringify(car_obj));
        window.location.href = 'new_reservation2.html';
    });

    card.appendChild(select_btn);

    return card;
}

function filterCars(){
    // get selected car types
    const selectedTypes = Array.from(document.querySelectorAll('input[name="carType"]:checked')).map(checkbox => checkbox.value);
    

    // get selected car brands
    const selectedBrands = Array.from(document.querySelectorAll('input[name="carBrand"]:checked')).map(checkbox => checkbox.value);
    
    // Filter car based on selected types and brands
    const filteredCars = cars.filter(car=>{
        const carType = car.getType();
        const carBrand = car.getBrand();

        return (selectedTypes.length === 0 ||selectedTypes.includes(carType)) && (selectedBrands.length === 0 ||selectedBrands.includes(carBrand));
    });

    // Clear car list
    car_list.innerHTML = '';
    filteredCars.forEach(car => {
        const card = createCarCard(car);
        car_list.appendChild(card);
    });
}

const back_btn = document.getElementById('back-btn');
back_btn.addEventListener('click', () => {
    window.location.href = '../reservation.html';
});

const car_list = document.getElementById('car-list');

const carTypeCheckboxes = document.querySelectorAll('input[name="carType"]');
console
const carBrandCheckboxes = document.querySelectorAll('input[name="carBrand"]');

carTypeCheckboxes.forEach(checkbox => { checkbox.addEventListener('change', filterCars); } );
carBrandCheckboxes.forEach(checkbox => { checkbox.addEventListener('change', filterCars); } );

filterCars();