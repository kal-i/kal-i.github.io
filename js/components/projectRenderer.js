import { projects } from "../data/projects.js";

export function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project, index) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item", "reveal");
    projectItem.dataset.index = index; // link card -> modal later

    projectItem.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}<p/>
  `;

    projectList.appendChild(projectItem);
  });
}
