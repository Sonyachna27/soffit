document.addEventListener("DOMContentLoaded", function() {
const burgerMenu = document.querySelector('.burgerBtn');
const content = document.querySelector('.header__bottom-container-wrap');
const htmlElement = document.querySelector('html');
burgerMenu.addEventListener('click' , () => htmlElement.classList.toggle('open'));

// Функция загрузки контента при скролле

const sections = document.querySelectorAll('.sectionScroll'); 

const options = {
  root: document,
  rootMargin: '0px',  
  threshold: 0.1 
};

const callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animate')) { 
        entry.target.classList.add('animate');
      } 
      else if (!entry.isIntersecting && entry.target.classList.contains('animate')) { // Видалити клас .animate, якщо елемент виходить з області видимості
        entry.target.classList.remove('animate');
      }
    });
  };
  
const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section)); 

});

// слайдер для преимуществ в секции advantages главная страница

const sliderAdvantages = new Swiper('.sliderAdvantages', {


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.advantages-button-next',
    prevEl: '.advantages-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
   
    // when window width is >= 640px
    
    1023: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});
//слайдер для главной страницы секция - галлерея
const sliderGallery = new Swiper('.sliderGallery', {


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
   
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
//слайдер для главной страницы секция отзывы
const sliderReviews = new Swiper('.sliderReviews', {


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
   
    // when window width is >= 640px
    
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// функция для Faq-section

const accordionItemsFaq = document.querySelectorAll('.faq__container-accord-item');
if(accordionItemsFaq){
  accordionItemsFaq.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
}