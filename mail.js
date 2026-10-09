// script.js

//Initialize EmailJS with your Public Key
(function() {
    emailjs.init("k8fiX-70WD_EYzk3q"); // Replace with your actual public key
})();

//Attach event listener to the form submission
window.onload = function() {
    //const form = document.querySelector('form');
    const f = document.querySelector('form');

    //form.addEventListener('submit', function(event) {
    f.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Collect form data
        const templateParams = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            date: document.getElementById('date').value,
            message: document.getElementById('message').value
        };

        // Send email using EmailJS
        emailjs.send('service_mdn5yuc', 'template_t6rrs6p', templateParams) // Replace with your actual service ID and template ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert("Failed to send email. Check console for details and please try again.");
                console.error('FAILED!', error);
            });
    });
}
