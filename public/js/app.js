let swiper = new Swiper(".review-swiper", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});



// Accordion
const accordionButtons = document.querySelectorAll('.accordion-btn');

// Hide all accordion contents initially
document.querySelectorAll('.accordion-content').forEach(content => {
  content.classList.remove('active');
});

accordionButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Find the parent div that contains both the button and content
    const accordionItem = this.closest('.accordion-item');

    // Find the content div within this accordion item
    const content = accordionItem.querySelector('.accordion-content');

    // Find the plus icon
    const plusIcon = this.querySelector('.plus-icon');

    // Toggle active class on content
    content.classList.toggle('active');

    // Toggle active class on plus icon
    plusIcon.classList.toggle('active');

    // Close other accordions
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        const otherAccordionItem = otherButton.closest('.accordion-item');
        const otherContent = otherAccordionItem.querySelector('.accordion-content');
        const otherPlusIcon = otherButton.querySelector('.plus-icon');

        otherContent.classList.remove('active');
        otherPlusIcon.classList.remove('active');
      }
    });
  });
});