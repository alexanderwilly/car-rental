
class User{
    __fullName;
    __email;
    __password;
    constructor(fullname, email, password){
        this.__fullName = fullname;
        this.__email = email;
        this.__password = password;
    }

    getFullName(){return this.__fullName;}
    getEmail(){return this.__email;}
    getPassword(){return this.__password;}

    setFullName(fullname){this.__fullName = fullname;}
    setEmail(email){this.__email = email;}
    setPassword(password){this.__password = password;}
}

class Staff extends User{}
class Customer extends User{}



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

async function validateLogin(){
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
                    // window.location.href = "../customer/customer.html";
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
    new Staff ("John Doe", "staff1@gmail.com", "2f005e42a17da46ec51ba6f11d725e60788931a1dadd33d9cb85084fb32bb166"),
    new Customer ("Jamie Lie", "customer1@gmail.com", "2cbf58e520216e4ea5caa705a9b3667e371af90c9ad4637f6d90b1189ff5e138")
]


// console.log(hashString('Staff123'));
// console.log(hashString('Cust123'));


let button = document.getElementById("submit-btn");
button.addEventListener("click", validateLogin);


