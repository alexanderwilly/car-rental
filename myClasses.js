class User{
    _fullName;
    _dob;
    _address;
    _email;
    _phone;
    _password;
    constructor(fullname, dob, address, email, phone, password){
        this._fullName = fullname;
        this._dob = dob;
        this._address = address;
        this._email = email;
        this._phone = phone;
        this._password = password;
    }

    getFullName(){return this._fullName;}
    getDob(){return this._dob;}
    getAddress(){return this._address;}
    getEmail(){return this._email;}
    getPhone(){return this._phone;}
    getPassword(){return this._password;}

    setFullName(fullname){this._fullName = fullname;}
    setDob(dob){this._dob = dob;}
    setAddress(address){this._address = address;}
    setEmail(email){this._email = email;}
    setPhone(phone){this._phone = phone;}
    setPassword(password){this._password = password;}
}

class Staff extends User{}

class Customer extends User{
    __card;
    __license;
    __isValid;

    constructor(fullname, dob, address, email, phone, password, card, license, isValid){
        super(fullname, dob, address, email, phone, password);
        this.__card = card;
        this.__license = license;
        this.__isValid = isValid;
    }

    getCard(){return this.__card;}
    getLicense(){return this.__license;}
    getIsValid(){return this.__isValid;}
    
    setCard(card){this.__card = card;}
    setLicense(license){this.__license = license;}
    setIsValid(isValid){this.__isValid = isValid;}
}



class Reservation{
    _reservationId;
    _email;
    _startDate;
    _endDate;
    _status;
    _estFee;
    _pickupLocation;
    _returnLocation;
    _vehicle;
    _additionalPayment = [];

    constructor(reservationId, email, startDate, endDate, status, estFee, pickupLocation, returnLocation, vehicle){
        this._reservationId = reservationId;
        this._email = email;
        this._startDate = startDate;
        this._endDate = endDate;
        this._status = status;
        this._estFee = estFee;
        this._pickupLocation = pickupLocation;
        this._returnLocation = returnLocation;
        this._vehicle = vehicle;
    }

    getReservationId(){return this._reservationId;}
    getEmail(){return this._email;}
    getStartDate(){return this._startDate;}
    getEndDate(){return this._endDate;}
    getStatus(){return this._status;}
    getEstFee(){return this._estFee;}
    getPickupLocation(){return this._pickupLocation;}
    getReturnLocation(){return this._returnLocation;}
    getVehicle(){return this._vehicle;}
    getAdditionalPayment(){return this._additionalPayment;}

    setReservationId(reservationId){this._reservationId = reservationId;}
    setEmail(email){this._email = email;}
    setStartDate(startDate){this._startDate = startDate;}
    setEndDate(endDate){this._endDate = endDate;}
    setStatus(status){this._status = status;}
    setEstFee(estFee){this._estFee = estFee;}
    setPickupLocation(pickupLocation){this._pickupLocation = pickupLocation;}
    setReturnLocation(returnLocation){this._returnLocation = returnLocation;}
    setVehicle(vehicle){this._vehicle = vehicle;}
    setAdditionalPayment(additionalPayment){this._additionalPayment = additionalPayment;}

    
    duration(){
        const startDate = new Date(this._startDate);
        const endDate = new Date(this._endDate);
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    getEstFee(){
        return this.duration() * this._vehicle.getDailyRate();
    }

    

    getPaymentDueDate(){
        // end date + 7 days
        const endDate = new Date(this._endDate);
        endDate.setDate(endDate.getDate() + 7);
        return `${endDate.getDate()} ${endDate.toLocaleString('default', { month: 'long' })} ${endDate.getFullYear()}`;
    }

    addAdditionalPayment(remarks, image, fee){
        this._additionalPayment.push({remarks: remarks, image:image, fee: fee});
    }   

    getTotalAmount(){
        let total = this.getEstFee();
        this._additionalPayment.forEach((payment) => {
            total += payment.fee;
        });
        return total;
    }
}

class Vehicle{
    _vehicleId;
    _image;
    _brand;
    _model;
    _type;
    _bootSpace;
    _seats;
    _fuelTankCapacity;
    _fuelConsumption;
    _dailyRate;
    
    constructor(vehicleId, image, brand, model, type, bootSpace, seats, fuelTankCapacity, fuelConsumption, dailyRate){
        this._vehicleId = vehicleId;
        this._image = image;
        this._brand = brand;
        this._model = model;
        this._type = type;
        this._bootSpace = bootSpace;
        this._seats = seats;
        this._fuelTankCapacity = fuelTankCapacity;
        this._fuelConsumption = fuelConsumption;
        this._dailyRate = dailyRate;
    }

    getVehicleId(){return this._vehicleId;}
    getImage(){return this._image;}
    getBrand(){return this._brand;}
    getModel(){return this._model;}
    getType(){return this._type;}
    getBootSpace(){return this._bootSpace;}
    getSeats(){return this._seats;}
    getFuelTankCapacity(){return this._fuelTankCapacity;}
    getFuelConsumption(){return this._fuelConsumption;}
    getDailyRate(){return this._dailyRate;}

    setVehicleId(vehicleId){this._vehicleId = vehicleId;}
    setImage(image){this._image = image;}
    setBrand(brand){this._brand = brand;}
    setModel(model){this._model = model;}
    setType(type){this._type = type;}
    setBootSpace(bootSpace){this._bootSpace = bootSpace;}
    setSeats(seats){this._seats = seats;}
    setFuelTankCapacity(fuelTankCapacity){this._fuelTankCapacity = fuelTankCapacity;}
    setFuelConsumption(fuelConsumption){this._fuelConsumption = fuelConsumption;}
    setDailyRate(dailyRate){this._dailyRate = dailyRate;}

}
