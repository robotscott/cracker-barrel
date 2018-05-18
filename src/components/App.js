import React, { Component } from 'react';
import '../css/App.css';
import Board from '../components/Board';

class App extends Component {
	constructor(props) {
		super(props);

		this.endGame = this.endGame.bind(this);
		this.startGame = this.startGame.bind(this);
	}
	state = { gameStatus: 'Not Started' };
	startGame = () => {
		this.setState({ gameStatus: 'In Progress' });
		console.log('startGame');
	};
	endGame = () => {
		this.setState({ gameStatus: 'Game Ended' });
	};
	restart = () => {
		this.setState({ gameStatus: 'Restart' });
	};

	render() {
		return (
			<div className="App">
				<h1>Peg Game</h1>
				<h2 className="gameStatus">Game Status: {this.state.gameStatus}</h2>
				<Board
					gameStatus={this.state.gameStatus}
					startGame={this.startGame}
					endGame={this.endGame}
				/>
				{this.state.gameStatus !== 'In Progress' ? (
					<button onClick={this.startGame}>Start Game</button>
				) : (
					<div>
						<button onClick={this.endGame}>End Game</button>
						<button onClick={this.restart}>Restart</button>
					</div>
				)}
			</div>
		);
	}
}

export default App;
