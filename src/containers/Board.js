import { connect } from 'react-redux';
import * as boardActions from '../actions/board';
import * as gameActions from '../actions/game';
import Board from '../components/Board';

const mapStateToProps = state => {
	return {
		holes: state.board.holes,
		pendingHole: state.board.pendingHole,
		gameStatus: state.game.gameStatus,
		removeFirstPeg: state.game.removeFirstPeg
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removePeg: hole => dispatch(boardActions.removePeg(hole)),
		addPeg: hole => dispatch(boardActions.addPeg(hole)),
		resetBoard: () => dispatch(boardActions.resetBoard()),
		endGame: () => dispatch(gameActions.endGame()),
		startGame: () => dispatch(gameActions.startGame()),
		endFirstMove: () => dispatch(gameActions.endFirstMove()),
		setPendingHole: hole => dispatch(gameActions.setPendingHole(hole))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
