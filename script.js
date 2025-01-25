// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    });
});

// Form Validation for Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset(); // Clear the form
    }
});

// Email validation helper function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Mobile Navbar Toggle (for smaller screens)
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '&#9776;'; // Hamburger icon
toggleButton.classList.add('toggle-button');
navbar.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close navbar when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Image Lightbox for Gallery
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        // Clear previous content
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
    });
});

// Close lightbox when clicked
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});