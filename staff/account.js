const user = new Staff (
    "John Doe", 
    "12/12/1995",
    "64 Jalan Kaki Bukit,\nSingapore, Singapore 987654",
    "staff1@gmail.com", 
    "+65 8123 4567", 
    "2f005e42a17da46ec51ba6f11d725e60788931a1dadd33d9cb85084fb32bb166");



const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const address = document.getElementById("address");

fullname.innerHTML = user.getFullName();
email.innerHTML = user.getEmail();
phone.innerHTML = user.getPhone();
dob.innerHTML = user.getDob();
address.innerHTML = user.getAddress();
