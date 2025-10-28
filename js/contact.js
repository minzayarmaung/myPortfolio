// contact.js
(function() {
    emailjs.init("service_k3z2gty"); // Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(() => {
                alert("✅ Message sent successfully! I’ll get back to you soon.");
                form.reset();
            }, (error) => {
                alert("❌ Failed to send message. Please try again later.");
                console.error("EmailJS error:", error);
            });
    });
});