const logout = document.getElementById("logout-btn");
const aside_btn_account = document.getElementById("aside-btn-account");
const aside_btn_reservation = document.getElementById("aside-btn-reservation");
const aside_btn_return = document.getElementById("aside-btn-return"); 

logout.addEventListener("click", (e) =>{
    e.preventDefault();
    window.location.href = "../index.html";
});

aside_btn_account.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "account.html";
})

aside_btn_reservation.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "reservation.html";
})

aside_btn_return.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "car_return.html";
})