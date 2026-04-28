import { initNPCForm, addLine, validateTotal } from "./ui/npcForm.js";

document.getElementById("add-line").addEventListener("click", () => {
    addLine();
});

document.getElementById("generate").addEventListener("click", () => {
    if (!validateTotal()) return;

    console.log("Génération future...");
});

initNPCForm();