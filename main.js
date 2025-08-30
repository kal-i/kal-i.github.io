import { renderSkills } from "./js/components/skillRenderer.js";
import { renderProjects } from "./js/components/projectRenderer.js";
import { setupModal } from "./js/components/modal.js";
import { setupScrollToRevealAnimation } from "./js/components/reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  setupModal();
  setupScrollToRevealAnimation();
});
