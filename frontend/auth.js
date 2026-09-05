const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const themeToggle = document.getElementById('theme-toggle');
const themeLogo = document.getElementById('theme-logo');
const themeIcon = themeToggle.querySelector('i');
const favicon = document.getElementById('favicon');

// Form animation toggles
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Forgot Password toggle
const loginForm = document.getElementById('login-form');
const forgotForm = document.getElementById('forgot-form');
const showForgotBtn = document.getElementById('show-forgot-btn');
const backToLoginBtn = document.getElementById('back-to-login-btn');

showForgotBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    forgotForm.style.display = 'block';
});

backToLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    forgotForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Fake Login Logic
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    
    if (usernameInput && passwordInput) {
        if (usernameInput.value === 'Admin' && passwordInput.value === 'Admin@123') {
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials. For testing, please use Admin / Admin@123');
        }
    }
});

// Theme toggling logic
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch to Light Mode
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        themeLogo.src = 'logos/logo_light.png';
        favicon.href = 'logos/logo_light.png';
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        themeLogo.src = 'logos/logo_dark.png';
        favicon.href = 'logos/logo_dark.png';
        localStorage.setItem('theme', 'dark');
    }
});

// Check for saved user preference on load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        themeLogo.src = 'logos/logo_dark.png';
        favicon.href = 'logos/logo_dark.png';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        themeLogo.src = 'logos/logo_light.png';
        favicon.href = 'logos/logo_light.png';
    }
});
