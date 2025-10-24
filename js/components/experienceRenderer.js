import { experience } from "../data/experience.js";

export function renderExperience() {
    const experienceList = document.getElementById("experience-list");

    experience.forEach(experience => {
        const experienceItem = document.createElement("div");
        experienceItem.classList.add("experience-item", "reveal");

        experienceItem.innerHTML = `
        <h3 class="experience-role">${experience.role}</h3>
        <p class="experience-host">${experience.host} | ${experience.duration}</p>
        <ul class="experience-description">
            ${experience.description.map(e => `<li>${e}</li>`).join("")}
        </ul>
        `;

        experienceList.appendChild(experienceItem);
    });
}