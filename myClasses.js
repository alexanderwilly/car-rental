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

