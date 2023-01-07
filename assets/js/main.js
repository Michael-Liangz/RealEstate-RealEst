// TODO ======================= CHANGE BACKGROUND HEADER =======================
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// ? When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

// TODO ======================= SWIPER POPULAR =======================

// TODO ======================= VALUE ACCORDION =======================

// TODO ======================= SCROLL SECTIONS ACTIVE LINK =======================

// TODO ======================= SHOW SCROLL UP =======================

// TODO ======================= DARK LIGHT THEME =======================

// TODO ======================= SCROLL REVEAL ANIMATION =======================
