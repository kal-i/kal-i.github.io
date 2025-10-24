import { projects } from "../data/projects.js";

export function setupProjectsRedirect() {
    document.querySelectorAll(".project-item").forEach(card => {
        card.addEventListener("click", () => {
            const index = card.dataset.index;
            const project = projects[index];

            if (project.source_code) {
                if (typeof project.source_code === "string") {
                    window.open(project.source_code, "_blank");
                } else if (typeof project.source_code === "object") {
                    const firstUrl = Object.values(project.source_code)[0];
                    if (firstUrl) window.open(firstUrl, "_blank");
                }
            }
        });
    });
}