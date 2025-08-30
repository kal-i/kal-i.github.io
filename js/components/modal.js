import { projects } from "../data/projects.js";

export function setupModal() {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".project-item").forEach(card => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      const project = projects[index];

      const thumbnailHTML = project.thumbnail
        ? `<img src="${project.thumbnail}" alt="${project.title}" class="modal-thumbnail" />`
        : "";

      let featuresHTML = "";
      if (project.features) {
        if (Array.isArray(project.features)) {
            featuresHTML = `<h4 class="modal-section-feature">Features</h4>
                              <ul class='modal-features'>` +
                              project.features.map(f => {
                                const key = Object.keys(f)[0];
                                return `<li><strong>${key}:</strong> ${f[key]}</li>`;
                              }).join("") +
                              "</ul>";
        } else {
          featuresHTML = Object.entries(project.features)
            .map(([section, items]) => {
              return `<h4 class="modal-section-feature">${section.charAt(0).toUpperCase() + section.slice(1)} Features</h4>
                      <ul class='modal-features'>` +
                items.map(f => {
                  const key = Object.keys(f)[0];
                  return `<li><strong>${key}:</strong> ${f[key]}</li>`;
                }).join("") +
                `</ul>`;
            }).join("");
        }
      }

      let sourceCodeHTML = "";
      if (project.source_code) {
        if (typeof project.source_code === "string") {
          sourceCodeHTML = `<a href="${project.source_code}" target="_blank" class="modal-source-code">Source Code</a>`;
        } else if (typeof project.source_code === "object") {
          sourceCodeHTML = Object.entries(project.source_code)
            .map(([platform, url]) => `<a href="${url}" target="_blank" class="modal-source-code">${platform} Source</a>`)
            .join(" | ");
        }
      }

      modalContent.innerHTML = `
      <h3 class="modal-title">${project.title}</h3>
      <p class="modal-date">${project.date}</p>
      <p class="modal-description">${project.description}</p>
      ${thumbnailHTML}
      <ul class="modal-tech">
        ${project.tech.map(t => `<li>${t}</li>`).join("")}
      </ul>
      ${sourceCodeHTML}
      ${featuresHTML}
    `;

      modal.classList.add("modal-open");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("modal-open");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("modal-open");
  });
}
