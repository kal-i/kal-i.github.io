import { projects } from "../data/projects.js";

export function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project, index) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item", "reveal");
    projectItem.dataset.index = index; // link card -> modal later

    projectItem.innerHTML = `
    <h3 class="project-type">${project.type}</h3>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-date">${project.date}</p>
    ${project.tech && project.tech.length
        ? `<ul class="project-tech-stacks">${project.tech.map(t => `<li>${t}</li>`).join("")}`
        : ""
      }
  `;

    projectList.appendChild(projectItem);
  });
}
