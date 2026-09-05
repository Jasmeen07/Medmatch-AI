// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const themeLogo = document.getElementById('theme-logo');
const themeIcon = themeToggle.querySelector('i');
const favicon = document.getElementById('favicon');

function updateTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        themeLogo.src = 'logos/logo_dark.png';
        if(favicon) favicon.href = 'logos/logo_dark.png';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        themeLogo.src = 'logos/logo_light.png';
        if(favicon) favicon.href = 'logos/logo_light.png';
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
    updateTheme(isDark);
});

window.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('theme') === 'dark';
    updateTheme(isDark);
});

// File Upload Interaction
const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('file-input');
const uploadBtn = document.querySelector('.upload-btn');
const uploadStatus = document.getElementById('upload-status');

// Trigger file input on button click
uploadBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering the box click
    fileInput.click();
});

// Trigger file input on box click
uploadBox.addEventListener('click', () => {
    fileInput.click();
});

// Drag and drop visual cues
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    
    if (e.dataTransfer.files.length) {
        handleFiles(e.dataTransfer.files);
    }
});

// Handle selected files
fileInput.addEventListener('change', function() {
    if (this.files.length) {
        handleFiles(this.files);
    }
});

function handleFiles(files) {
    // Basic UI update to show files were selected
    uploadStatus.style.display = 'block';
    uploadStatus.innerHTML = `<p style="margin-top:20px; font-weight:600; color:var(--primary-color);">Selected ${files.length} file(s) for analysis.</p>`;
    
    // Here you would typically handle the actual file upload to your backend
    console.log(files);
}
