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
const accordionItems = document.querySelectorAll(".value_accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value_accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value_accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// TODO ======================= SCROLL SECTIONS ACTIVE LINK =======================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// TODO ======================= SHOW SCROLL UP =======================
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// TODO ======================= DARK LIGHT THEME =======================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// * Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// * We obtain the current theme that the interfaces has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// * We validate if the user previously chose a topic
if (selectedTheme) {
  // * If the validation is fulfilled, we ask that the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// * Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // * Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // * We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// TODO ======================= SCROLL REVEAL ANIMATION =======================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // * digunakan agar animasinya muncul secara terus menerus
});

sr.reveal(
  ".home_title, .popular_container, .subscribe_container, .footer_container"
);
sr.reveal(".home_description, .footer_info", { delay: 500 });
sr.reveal(".home_search", { delay: 600 });
sr.reveal(".home_value", { delay: 700 });
sr.reveal(".home_images", { delay: 800, origin: "bottom" });
sr.reveal(".logos_img", { interval: 100 });
sr.reveal(".value_images, .contact_content", { origin: "left" });
sr.reveal(".value_content, .contact_images", { origin: "right" });
