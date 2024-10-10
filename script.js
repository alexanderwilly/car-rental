function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function redirectLogin(){
    window.location.href = './login/login.html';
}
const faqs = document.querySelectorAll('.questions');
const close = document.getElementById('close-icon');
const login = document.getElementById('login-btn');
const bars = document.getElementById('bars-icon');


close.addEventListener('click', (e) => {
    e.preventDefault();
    hideSidebar();
});

login.addEventListener('click', (e) => {
    e.preventDefault();
    redirectLogin();
});

bars.addEventListener('click', (e) => {
    e.preventDefault();
    showSidebar();
});

faqs.forEach(faq => {
    faq.addEventListener('click', (e) => {
        e.preventDefault();
        faq.classList.toggle('active');
    });
});

