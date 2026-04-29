import { initNpcForm, addLine, validateTotal } from "./ui/npcForm.js";
import { generateNPCCards } from "./npcGenerator.js";

document.addEventListener("DOMContentLoaded", () => {
    initNpcForm();

    document.getElementById("add-line").addEventListener("click", () => {
        addLine();
    });

    document.getElementById("generate").addEventListener("click", () => {
		const total = validateTotal();
		if (total === null) return;

		generateNPCCards(total);
	});
});