// TODO ======================= CHANGE BACKGROUND HEADER =======================
function scrollHeader() {
  const header = document.getElementById("header");
  // ? When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// TODO ======================= SWIPER POPULAR =======================
// ! Source code dari SwiperJs, https://codesandbox.io/s/5vdwrg?file=/index.html:2253-2418 -->
var swiperPopular = new Swiper(".popular_container", {
  spaceBetween: 32,
  grabCursor: true,
  centerdSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// TODO ======================= VALUE ACCORDION =======================

// TODO ======================= SCROLL SECTIONS ACTIVE LINK =======================

// TODO ======================= SHOW SCROLL UP =======================

// TODO ======================= DARK LIGHT THEME =======================

// TODO ======================= SCROLL REVEAL ANIMATION =======================
