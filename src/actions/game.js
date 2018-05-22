export const startGame = () => ({
	type: 'START_GAME',
	gameStatus: 'In Progress'
});
export const endGame = () => ({
	type: 'END_GAME',
	gameStatus: 'Game Ended'
});
export const setPendingHole = (pendingHole = null) => ({
	type: 'SET_PENDING_HOLE',
	pendingHole
});
export const endFirstMove = () => ({ type: 'END_FIRST_MOVE' });
