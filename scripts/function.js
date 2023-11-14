// ANIMATE TEXT - TYPING EFFECT
var typed = new Typed(".multiple-text", {
    strings:["Software Engineer", "Computer Scientist", "Backend Developer", "Hackathon Competitor", "Enthusiast of Mysteries"],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
    }
) 

// Takes a pdf file and opens it in another window
function downloadFile(){
    window.open("files/CurrentResume.pdf")
}


// COPIED FROM SWIPER API
const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15.5,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop:true,
    pagination: {
        el: ".swiper-pagination",}
});
