// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".depoimentos-cards .card");
    let index = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    }

    showTestimonial(index);
    setInterval(nextTestimonial, 5000);
});
