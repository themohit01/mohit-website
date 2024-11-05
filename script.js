function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}
function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function toggleFaq(id) {
    const content = document.getElementById(id);
    const icon = content.previousElementSibling.querySelector('.toggle-icon');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.textContent = '+';
    } else {
        content.style.display = 'block';
        icon.textContent = '-';
    }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields
});
let currentTestimonialIndex = 0;

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials[currentTestimonialIndex].classList.remove('active');
    
    currentTestimonialIndex += direction;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    
    testimonials[currentTestimonialIndex].classList.add('active');
}
let currentTestimonialIndex = 0;

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials[currentTestimonialIndex].classList.remove('active');
    
    currentTestimonialIndex += direction;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    
    testimonials[currentTestimonialIndex].classList.add('active');
}
