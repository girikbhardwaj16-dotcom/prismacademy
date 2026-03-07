// JOIN FORM VALIDATION & POPUP
document.getElementById('joinForm').addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let course = document.getElementById('course').value;
    if(name && email && course){
        alert(`🎉 Thank you ${name}! You have successfully joined the ${course} course.`);
        this.reset();
    } else {
        alert("⚠️ Please fill all fields!");
    }
});

// TESTIMONIAL SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    dots.forEach(function(dot) {
        dot.classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
window.goToSlide = goToSlide;

// Form Submission
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    
    if(name && email && course) {
        alert('Thank you ' + name + '! You have successfully joined the ' + course + ' course.');
        this.reset();
    } else {
        alert('Please fill all fields!');
    }
});

