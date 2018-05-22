import { connect } from 'react-redux';
import { endGame, startGame } from '../actions/game';
import { resetBoard } from '../actions/board';
import Buttons from '../components/Buttons';

const mapStateToProps = state => {
	return {
		gameStatus: state.game.gameStatus
	};
};

const mapDispatchToProps = dispatch => {
	return {
		resetBoard: () => dispatch(resetBoard()),
		endGame: () => dispatch(endGame()),
		startGame: () => dispatch(startGame())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
