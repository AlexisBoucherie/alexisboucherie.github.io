import { generateUUID } from "../utils.js";
import { state, addNPC, removeNPC, getTotalCount } from "../state.js";

const container = document.getElementById("NPC-container");
const template = document.getElementById("NPC-row-template");
const errorEl = document.getElementById("error");

export function initNPCForm() {
    addLine(); // première ligne
}

export function addLine() {
    const clone = template.content.cloneNode(true);
    const row = clone.querySelector(".NPC-row");

    const id = generateUUID();
    row.dataset.id = id;

    const deleteBtn = row.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        removeNPC(id);
        row.remove();
    });

    // Ajout au state
    addNPC({
        id,
        type: "ange",
        superieur: "random",
        archetype: "random",
        nombre: 1
    });

    // Sync inputs -> state
    row.addEventListener("change", (e) => {
        const NPC = state.NPCList.find(p => p.id === id);
        if (!NPC) return;

        if (e.target.classList.contains("type")) NPC.type = e.target.value;
        if (e.target.classList.contains("superieur")) NPC.superieur = e.target.value;
        if (e.target.classList.contains("archetype")) NPC.archetype = e.target.value;
        if (e.target.classList.contains("nombre")) NPC.nombre = Number(e.target.value);
    });

    container.appendChild(clone);
}

export function validateTotal() {
    const total = getTotalCount();

    if (total > 10) {
        errorEl.textContent = "Maximum 10 PNJ autorisés.";
        return false;
    }

    errorEl.textContent = "";
    return true;
}