export const state = {
    npcList: []
};

export function addNpc(npc) {
    state.npcList.push(npc);
}

export function removeNpc(id) {
    state.npcList = state.npcList.filter(p => p.id !== id);
}

export function getTotalCount() {
    return state.npcList.reduce((sum, p) => sum + Number(p.nombre), 0);
}