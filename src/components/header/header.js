function scrollMenu() {
  const header = document.querySelector(".header");
  const headerHeight = header.getBoundingClientRect().height;
  if (window.scrollY > headerHeight) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
}
document.addEventListener("scroll", scrollMenu);
