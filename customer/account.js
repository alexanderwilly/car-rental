const user = new Customer ("Jamie Lie",
    "01/01/1990",
    "123 Lorong Chuan, <br/>Singapore, Singapore 123456", 
    "customer1@gmail.com", 
    "+65 8987 6543", 
    "096a634ebef7363da45157c18a4afb7ed6c62a322f452a51d4d1cd834c4a437b", 
    "VISA-9876",
    "666F", true);


const edit = document.getElementById("edit-btn");

edit.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "edit_account.html";
})

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const licenseNum = document.getElementById("licenseNum");
const address = document.getElementById("address");
const licenseStatus = document.getElementById("licenseStatus");
const cardNum = document.getElementById("cardNum");

fullname.innerHTML = user.getFullName();
email.innerHTML = user.getEmail();
phone.innerHTML = user.getPhone();
dob.innerHTML = user.getDob();
licenseNum.innerHTML = `*****${user.getLicense()}`;
address.innerHTML = user.getAddress();
licenseStatus.innerHTML = user.getIsValid() ? "Valid" : "Invalid";
cardNum.innerHTML = user.getCard();
