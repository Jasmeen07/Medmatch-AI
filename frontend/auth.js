const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const themeToggle = document.getElementById('theme-toggle');
const themeLogo = document.getElementById('theme-logo');
const themeIcon = themeToggle.querySelector('i');
const favicon = document.getElementById('favicon');

// ─── Helpers ────────────────────────────────────────────────────────────────

function showLoginPanel() {
    loginForm.style.display = 'block';
    forgotForm.style.display = 'none';
    otpLoginForm.style.display = 'none';
    // Reset OTP login form state
    otpLoginPhoneBox.style.display = 'block';
    otpLoginCodeBox.style.display = 'none';
    otpLoginBtn.textContent = 'Send OTP';
    otpStep = 1;
}

// ─── Panel Animation Toggles ────────────────────────────────────────────────

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// FIX #5: Reset all login sub-forms when switching back to the Login panel
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    showLoginPanel();
});

// ─── Forgot Password ─────────────────────────────────────────────────────────

const loginForm = document.getElementById('login-form');
const forgotForm = document.getElementById('forgot-form');
const showForgotBtn = document.getElementById('show-forgot-btn');
const backToLoginBtn = document.getElementById('back-to-login-btn');

showForgotBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    otpLoginForm.style.display = 'none';
    forgotForm.style.display = 'block';
});

backToLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginPanel();
});

// ─── OTP Login ───────────────────────────────────────────────────────────────

const showOtpLoginBtn = document.getElementById('show-otp-login-btn');
const otpLoginForm = document.getElementById('otp-login-form');
const backToLoginFromOtp = document.getElementById('back-to-login-from-otp');
const otpLoginBtn = document.getElementById('otp-login-btn');
const otpLoginPhoneBox = document.getElementById('otp-login-phone-box');
const otpLoginCodeBox = document.getElementById('otp-login-code-box');

// FIX #2: Use a state variable instead of reading CSS display property
let otpStep = 1;

if (showOtpLoginBtn) {
    showOtpLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        forgotForm.style.display = 'none';
        otpLoginForm.style.display = 'block';
    });
}

if (backToLoginFromOtp) {
    backToLoginFromOtp.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginPanel();
    });
}

if (otpLoginForm) {
    otpLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (otpStep === 1) {
            // Step 1: Phone number entered, show OTP field
            const phone = document.getElementById('otp-login-phone').value;
            if (phone) {
                otpLoginPhoneBox.style.display = 'none';
                otpLoginCodeBox.style.display = 'block';
                document.getElementById('otp-login-code').required = true;
                otpLoginBtn.textContent = 'Login';
                otpStep = 2;
            }
        } else {
            // Step 2: Verify OTP
            const code = document.getElementById('otp-login-code').value;
            if (code === '2222') {
                window.location.href = 'index.html';
            } else {
                alert('Invalid OTP. Please enter 2222.');
            }
        }
    });
}

// ─── Fake Login ───────────────────────────────────────────────────────────────

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

// ─── Registration (2-Step) ────────────────────────────────────────────────────

const registerForm = document.getElementById('register-form');
const regStep1 = document.getElementById('reg-step-1');
const regStep2 = document.getElementById('reg-step-2');
const regBtn = document.getElementById('reg-btn');
const regSocial = document.getElementById('reg-social');
const regOtp = document.getElementById('reg-otp');
const backToRegStep1Btn = document.getElementById('back-to-reg-step1');

// FIX #3: Allow going back from OTP step to form step in registration
if (backToRegStep1Btn) {
    backToRegStep1Btn.addEventListener('click', (e) => {
        e.preventDefault();
        regStep2.style.display = 'none';
        regStep1.style.display = 'block';
        if (regSocial) regSocial.style.display = 'block';
        regBtn.textContent = 'Continue';
        regOtp.required = false;
        regOtp.value = '';
    });
}

// FIX #2 (registration): Use state variable instead of CSS check
let regCurrentStep = 1;

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (regCurrentStep === 1) {
            // Validate password confirm match before proceeding
            const pass = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-password-confirm').value;
            if (pass !== confirm) {
                alert('Passwords do not match. Please re-enter.');
                return;
            }
            // Show OTP step
            regStep1.style.display = 'none';
            if (regSocial) regSocial.style.display = 'none';
            regStep2.style.display = 'block';
            regBtn.textContent = 'Register';
            regOtp.required = true;
            regCurrentStep = 2;
        } else {
            // Verify OTP
            if (regOtp.value === '2222') {
                window.location.href = 'index.html';
            } else {
                alert('Invalid OTP. Please enter 2222.');
            }
        }
    });
}

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        themeLogo.src = 'logos/logo_light.png';
        favicon.href = 'logos/logo_light.png';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        themeLogo.src = 'logos/logo_dark.png';
        favicon.href = 'logos/logo_dark.png';
        localStorage.setItem('theme', 'dark');
    }
});

// FIX #1: Remove redundant DOMContentLoaded wrapper — script is at bottom of body,
// DOM is already ready. Run theme restore directly.
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
