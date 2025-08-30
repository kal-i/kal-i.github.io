import { skills } from "../data/skills.js";

export function renderSkills() {
  const skillList = document.getElementById("skill-list");

  let skillHTML = "{\n";
  Object.entries(skills).forEach(([category, items], index, array) => {
    skillHTML += `    <span class="json-key">"${category}"</span>: [ `;

    skillHTML += items
      .map(item => `<span class="json-value">"${item}"</span>`)
      .join(", ");

    skillHTML += " ]";
    if (index < array.length - 1) {
      skillHTML += ",";
    }
    skillHTML += "\n";
  });
  skillHTML += "}";
  skillList.innerHTML = skillHTML;
}
