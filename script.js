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


close.addEventListener('click', () => {
    hideSidebar();
});

login.addEventListener('click', () => {
    redirectLogin();
});

bars.addEventListener('click', () => {
    showSidebar();
});

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

