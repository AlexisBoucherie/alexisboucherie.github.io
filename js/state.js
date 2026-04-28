export const state = {
    npcList: []
};

export function addPNJ(pnj) {
    state.npcList.push(pnj);
}

export function removePNJ(id) {
    state.npcList = state.npcList.filter(p => p.id !== id);
}

export function getTotalCount() {
    return state.npcList.reduce((sum, p) => sum + Number(p.nombre), 0);
}