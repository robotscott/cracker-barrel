import React, { Component } from 'react';
import '../css/App.css';
import Board from '../components/Board';
import github from '../images/GitHub.png';

class App extends Component {
	constructor(props) {
		super(props);

		this.endGame = this.endGame.bind(this);
		this.startGame = this.startGame.bind(this);
	}
	state = { gameStatus: 'Not Started' };
	startGame = () => {
		this.setState({ gameStatus: 'In Progress' });
	};
	endGame = () => {
		this.setState({ gameStatus: 'Game Ended' });
	};
	restart = () => {
		this.setState({ gameStatus: 'Restart' });
	};

	render() {
		console.log(github);
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
				<ol className="rules">
					<li>Start game and click first peg to remove it from the board.</li>
					<li>Click one peg to jump over another, into an empty space, and removing the peg that was jumped over. Keep jumping until only one peg is left.</li>
					<li>You may only jump in a straight line.</li>
				</ol>
				<div className="github">
					<a
						href="https://github.com/robotscott/cracker-barrel"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="GitHub" />
					</a>
				</div>
			</div>
		);
	}
}

export default App;
