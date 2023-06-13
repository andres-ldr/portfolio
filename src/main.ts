window.addEventListener('load', () => {
  function Lazy1() {
    const sections = document.querySelectorAll('.lazy-element');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'slide-bottom-top',
            entry.isIntersecting
          );
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  Lazy1();
});
