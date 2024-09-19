let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};




window.onscroll = () => {
    


  let header = document.querySelector('.header');
    
header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
   darkModeIcon.classList.toggle('bx-sun');
   document.body.classList.toggle('dark-mode');
};




ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
   
  })
   ScrollReveal().reveal('.home-content, .heading', { dorigin: 'top' });
   ScrollReveal().reveal('.home-img img, .experience-container, .skills-box, .testimonial-wrapper, contact, form ', { dorigin: 'bottom' });
   ScrollReveal().reveal('.home-content h1, .about-img img', { dorigin: 'left' });
   ScrollReveal().reveal('.home-content h3, home-content p, .about-content', { dorigin: 'right' });