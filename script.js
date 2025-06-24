const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.innerHTML = navbar.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Hide mobile menu when a nav link is clicked and highlight the active link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'; // Reset the menu button icon

        // Remove 'active' class from all links and add to the clicked link
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active'); // Highlight the clicked link
    });
});

// Theme toggle setup
function setupThemeToggle(buttonId) {
    const themeBtn = document.getElementById(buttonId);
    const moonIcon = themeBtn.parentElement.querySelector('.fa-moon');
    const sunIcon = themeBtn.parentElement.querySelector('.fa-sun');
    let currentTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(currentTheme);
    themeBtn.addEventListener('click', toggleTheme);
    
    function setTheme(theme) {
        if(theme === 'light') {
            document.body.classList.add('light-mode');
            moonIcon.style.opacity = '0.5';
            sunIcon.style.opacity = '1';
            moonIcon.style.transform = 'scale(0.8)';
            sunIcon.style.transform = 'scale(1.1)';
        } else {
            document.body.classList.remove('light-mode');
            sunIcon.style.opacity = '0.5';
            moonIcon.style.opacity = '1';
            sunIcon.style.transform = 'scale(0.8)';
            moonIcon.style.transform = 'scale(1.1)';
        }
    }
    
    function toggleTheme() {
        if(document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }
}

setupThemeToggle('desktopThemeBtn');
setupThemeToggle('mobileThemeBtn');

// Typewriter effect for name
const nameElement = document.getElementById('name');
const fullText = "Hi! I'm Jenel Dela Resma";
function typeWriter() {
    let i = 0;
    nameElement.textContent = '';
    let typing = setInterval(() => {
        if (i < fullText.length) {
            nameElement.textContent += fullText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            setTimeout(typeWriter, 3000);
        }
    }, 100);
}
typeWriter();

// Typewriter effect for section headers
function typeWriterHeader(headerId, text) {
    const headerElement = document.getElementById(headerId);
    let i = 0;
    headerElement.textContent = '';
    let typing = setInterval(() => {
        if (i < text.length) {
            headerElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Call typewriter effect for each header
typeWriterHeader('favorites-header', 'My Favorites');
typeWriterHeader('facts-header', 'Random Facts');
