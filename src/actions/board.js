export const removePeg = pegIndex => ({
	type: 'REMOVE_PEG',
	pegIndex
});
export const addPeg = pegIndex => ({
	type: 'ADD_PEG',
	pegIndex
});
export const resetBoard = () => ({
	type: 'RESET_BOARD'
});
