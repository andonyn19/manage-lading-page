const d = document;

const carousel = (btnPrev, btnNext) => {
  const $slides = d.querySelectorAll('[data-slider]');

  let i = 0;

  d.addEventListener("click", (e) => {

    if (e.target.matches(`${btnPrev} > *`) || e.target.matches(btnPrev)) {
      e.preventDefault();
      $slides[i].classList.remove('active');
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add('active');
    }

    if (e.target.matches(`${btnNext} > *`) || e.target.matches(btnNext)) {
      e.preventDefault()
      $slides[i].classList.remove('active');
      i++;
      if (i > $slides.length - 1) {
        i = 0;
      }
      $slides[i].classList.add('active');
    }

  });
}

export default carousel;