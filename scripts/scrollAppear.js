
document.addEventListener("scroll", (e) => {
  document.querySelectorAll('section').forEach((section) => {
    if (section.getBoundingClientRect().top < (window.innerHeight - 600)) {
      section.classList.add('appearInPage');
    }
  })
});