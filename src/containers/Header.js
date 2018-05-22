import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => {
	return {
		gameStatus: state.game.gameStatus
	};
};

export default connect(mapStateToProps)(Header);
