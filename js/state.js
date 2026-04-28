export const state = {
    npcList: []
};

export function addNPC(npc) {
    state.npcList.push(npc);
}

export function removeNPC(id) {
    state.npcList = state.npcList.filter(p => p.id !== id);
}

export function getTotalCount() {
    return state.npcList.reduce((sum, p) => sum + Number(p.nombre), 0);
}