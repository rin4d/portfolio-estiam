window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    if (top > offset) {
      sec.classList.add("visible");
    }
  });
});
