
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



async function hashString(str) {
    // Encode the string into an ArrayBuffer
    const textEncoder = new TextEncoder();
    const data = textEncoder.encode(str);

    // Hash the encoded string using SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert the ArrayBuffer to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

async function validateLogin(e){
    e.preventDefault();
    
    // Regex for valid email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Regex for valid password, only allow alphanumeric characters
    var passwordRegex = /^[a-zA-Z0-9]*$/;

    var email = document.getElementById("email").value.trim().toLowerCase();
    var password = document.getElementById("password").value.trim();
    var error = document.getElementById("error-msg");

    error.innerHTML = "";

    if (email === "" || password === ""){
        error.innerHTML = "Please fill in all fields";
        return;
    }
    

    if (!emailRegex.test(email) || !passwordRegex.test(password)){
        error.innerHTML = "Invalid email or password format";
        return;
    }



    for (let u of users){
        if (u.getEmail() === email){
            if (u.getPassword() === await hashString(password)){
                if (u instanceof Staff){
                    // window.location.href = "../staff/staff.html";
                } else if (u instanceof Customer){
                    window.location.href = "../customer/account.html";
                }
                return;
            } else {
                error.innerHTML = "Invalid email or password";
                return;
            }
        }
    }


    error.innerHTML = "Invalid email or password";
    return;
}


// Main Starts here

// This data is purposely hard coded for this assignment. 
// In a real world scenario, this data would be stored in a database and retrieved from there.
let users = [
    new Staff (
        "John Doe", 
        "staff1@gmail.com", 
        "+65 8123 4567", 
        "2f005e42a17da46ec51ba6f11d725e60788931a1dadd33d9cb85084fb32bb166"),
    new Customer ("Jamie Lie",
        "1990-01-01",
        "123 Lorong Chuan,\nSingapore, Singapore 123456", 
        "customer1@gmail.com", 
        "+65 8987 6543", 
        "2cbf58e520216e4ea5caa705a9b3667e371af90c9ad4637f6d90b1189ff5e138", 
        "VISA-9876",
        "666F", true)
]


// console.log(hashString('Staff123'));
// console.log(hashString('Cust123'));


let button = document.getElementById("submit-btn");
button.addEventListener("click", validateLogin);


