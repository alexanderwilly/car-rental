


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
                    window.location.href = "../staff/account.html";
                } else if (u instanceof Customer){
                    window.location.href = "../customer/reservation.html";
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
        "12/12/1995",
        "64 Jalan Kaki Bukit,\nSingapore, Singapore 987654",
        "staff1@gmail.com", 
        "+65 8123 4567", 
        "2f005e42a17da46ec51ba6f11d725e60788931a1dadd33d9cb85084fb32bb166"),
    new Customer ("Jamie Lie",
        "01/01/1990",
        "123 Lorong Chuan,\nSingapore, Singapore 123456", 
        "customer1@gmail.com", 
        "+65 8987 6543", 
        "096a634ebef7363da45157c18a4afb7ed6c62a322f452a51d4d1cd834c4a437b", 
        "VISA-9876",
        "666F", true)
]


// console.log(hashString('Staff123'));
// console.log(hashString('Cust1234'));


let button = document.getElementById("submit-btn");
button.addEventListener("click", validateLogin);


