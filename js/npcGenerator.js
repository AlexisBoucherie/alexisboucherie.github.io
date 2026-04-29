export function generateNPCCards(total) {
    const container = document.getElementById("npc-results");
    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
        const card = document.createElement("div");
        card.className = "npc-card";
		
		card.dataset.index = i; // ajout d'un index sur les cartes
		
        card.innerHTML = `
            <!-- LEVEL 1 -->
            <div class="npc-header">
                <div class="npc-type">Type</div>
                <div class="npc-main">Archétype</div>
                <div class="npc-sub">Supérieur</div>
            </div>

            <!-- LEVEL 2 -->
            <div class="npc-section">
                <div class="npc-section-title">Caractéristiques</div>
                <div class="npc-stats">
                    <div class="npc-stat">FOR</div>
                    <div class="npc-stat">VOL</div>
                    <div class="npc-stat">PER</div>
                    <div class="npc-stat">AGI</div>
                    <div class="npc-stat">PRE</div>
                    <div class="npc-stat">APP</div>
                </div>
            </div>

            <div class="npc-section">
                <div class="npc-section-title">Pouvoirs</div>
                <div class="npc-list">-</div>
            </div>

            <div class="npc-section">
                <div class="npc-section-title">Talents</div>
                <div class="npc-list">-</div>
            </div>

            <div class="npc-section">
                <div class="npc-section-title">Limitations</div>
                <div class="npc-list">-</div>
            </div>

            <!-- LEVEL 3 -->
            <div class="npc-meta">
                <div>Incarnation : -</div>
                <div>Physique : -</div>
            </div>
        `;

        container.appendChild(card);
    }
}