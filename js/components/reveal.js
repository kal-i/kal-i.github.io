export function setupScrollToRevealAnimation() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // stop observing once revealed
      }
    });
  }, { threshold: 0.1 }); // reveal when 10% is visible

  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll(".project-item").forEach((item, i) => {
    item.style.setProperty("--i", i);
  });
}
