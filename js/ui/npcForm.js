import { generateUUID } from "../utils.js";
import { state, addNpc, removeNpc, getTotalCount } from "../state.js";

const container = document.getElementById("npc-container");
const template = document.getElementById("npc-row-template");
const errorEl = document.getElementById("error");

export function initNpcForm() {
    addLine(); // première ligne
}

export function addLine() {
    const clone = template.content.cloneNode(true);
    const row = clone.querySelector(".npc-row");

    const id = generateUUID();
    row.dataset.id = id;

    const deleteBtn = row.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        removeNpc(id);
        row.remove();
    });

    // Ajout au state
    addNpc({
        id,
        type: "ange",
        superieur: "random",
        archetype: "random",
        nombre: 1
    });

    // Sync inputs -> state
    row.addEventListener("change", (e) => {
        const npc = state.npcList.find(p => p.id === id);
        if (!npc) return;

        if (e.target.classList.contains("type")) npc.type = e.target.value;
        if (e.target.classList.contains("superieur")) npc.superieur = e.target.value;
        if (e.target.classList.contains("archetype")) npc.archetype = e.target.value;
        if (e.target.classList.contains("nombre")) npc.nombre = Number(e.target.value);
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