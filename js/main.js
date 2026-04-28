import { initNpcForm, addLine, validateTotal } from "./ui/npcForm.js";

document.addEventListener("DOMContentLoaded", () => {
    initNpcForm();

    document.getElementById("add-line").addEventListener("click", () => {
        addLine();
    });

    document.getElementById("generate").addEventListener("click", () => {
        if (!validateTotal()) return;

        console.log("Future generation...");
    });
});