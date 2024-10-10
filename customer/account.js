const logout = document.getElementById("logout-btn");
const edit = document.getElementById("edit-btn");


logout.addEventListener("click", (e) =>{
    e.preventDefault();
    window.location.href = "../index.html";
});

edit.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "edit_account.html";
})