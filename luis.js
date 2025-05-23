const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        const nameInput = document.querySelector('input[type="text"]');
        const emailInput = document.querySelector('input[type="email"]');
        const messageInput = document.querySelector('textarea');

        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            isValid = false;
        }
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
        if (!messageInput.value.trim()) {
            alert('Please enter your message.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}