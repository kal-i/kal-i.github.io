import { renderExperience } from "./js/components/experienceRenderer.js";
import { renderSkills } from "./js/components/skillRenderer.js";
import { renderProjects } from "./js/components/projectRenderer.js";
import { setupProjectsRedirect } from "./js/components/setupProjectsRedirect.js";
import { setupScrollToRevealAnimation } from "./js/components/reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderSkills();
  renderProjects();
  setupProjectsRedirect();
  setupScrollToRevealAnimation();
});
