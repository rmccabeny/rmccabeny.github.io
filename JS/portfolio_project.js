
//These functions open and close the contact form
function openForm() {
    document.getElementById("contactForm").style.display = "block";
    // Get a reference to the form and the submit button
    const form = document.getElementById('myForm');
    const submitButton = form.querySelector('button[type="submit"]');

    // Add event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();


        // Clear the form after the submission is complete
        form.reset();
    });

}

//This close(); FIX
function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

//This function covers the slideshow
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}