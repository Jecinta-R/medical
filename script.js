// Function to toggle sidebar menu
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}


// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Toggle Book Appointment Button Visibility on Scroll
window.addEventListener('scroll', () => {
    const appointmentBtn = document.querySelector('.appointment-btn');
    if (window.scrollY > 500) {
        appointmentBtn.style.display = 'block';
    } else {
        appointmentBtn.style.display = 'none';
    }
});

// Appointment Form Validation
document.querySelector('.appointment-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const phone = document.querySelector('[name="phone"]');
    const purpose = document.querySelector('[name="purpose"]');

    // Simple validation to check if all fields are filled
    if (!name.value || !email.value || !phone.value || !purpose.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Add more specific validation if needed, like regex for email/phone

    // If form is valid, you can handle the form submission here
    alert('Appointment Request Submitted!');
    // Reset form
    this.reset();
});
