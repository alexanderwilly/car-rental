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

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

