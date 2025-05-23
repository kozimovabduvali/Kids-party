
document.addEventListener("DOMContentLoaded", initializeUI);
function initializeUI() {
  const mobileMenu = document.getElementById('mobile-menu');

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Menu buttons
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-menu');
  const mobileLinks = document.querySelectorAll('#mobile-menu nav a');

  menuBtn?.removeEventListener('click', openMobileMenu);
  closeBtn?.removeEventListener('click', closeMobileMenu);
  menuBtn?.addEventListener('click', openMobileMenu);
  closeBtn?.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.removeEventListener('click', closeMobileMenu);
    link.addEventListener('click', closeMobileMenu);
  });

  if (mobileMenu) {
    mobileMenu.removeEventListener('click', mobileMenu._outsideClickListener || (() => { }));
    mobileMenu._outsideClickListener = function (e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    };
    mobileMenu.addEventListener('click', mobileMenu._outsideClickListener);
  }

  document.removeEventListener('keydown', document._escListener || (() => { }));
  document._escListener = function (e) {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('active')) {
      closeMobileMenu();
    }
  };
  document.addEventListener('keydown', document._escListener);

  // Swiper – initialize once per element
  document.querySelectorAll('.review-swiper').forEach(swiperEl => {
    if (!swiperEl.classList.contains('swiper-initialized')) {
      new Swiper(swiperEl, {
        loop: false,
        pagination: {
          el: swiperEl.querySelector('.swiper-pagination'),
          clickable: true,
        },
        navigation: {
          nextEl: swiperEl.querySelector('.swiper-button-next1'),
          prevEl: swiperEl.querySelector('.swiper-button-prev1'),
        },
        breakpoints: {
          320: { slidesPerView: 1.3, spaceBetween: 16 },
          576: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 2.5, spaceBetween: 16 },
          768: { slidesPerView: 3.2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        },
      });
      swiperEl.classList.add('swiper-initialized');
    }
  });

  // Accordion
  const accordionButtons = document.querySelectorAll('.accordion-btn');
  document.querySelectorAll('.accordion-content').forEach(content => {
    content.classList.remove('active');
  });

  accordionButtons.forEach(button => {
    button.removeEventListener('click', button._accordionClickListener || (() => { }));
    button._accordionClickListener = function () {
      const accordionItem = this.closest('.accordion-item');
      const content = accordionItem.querySelector('.accordion-content');
      const plusIcon = this.querySelector('.plus-icon');

      content.classList.toggle('active');
      plusIcon.classList.toggle('active');

      accordionButtons.forEach(otherButton => {
        if (otherButton !== this) {
          const otherItem = otherButton.closest('.accordion-item');
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherButton.querySelector('.plus-icon');
          otherContent.classList.remove('active');
          otherIcon.classList.remove('active');
        }
      });
    };
    button.addEventListener('click', button._accordionClickListener);
  });
}

initializeUI();