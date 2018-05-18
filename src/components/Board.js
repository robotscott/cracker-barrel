import React, { Component } from 'react';
import Peg from './Peg';
import '../css/Board.css';

export default class extends Component {
	state = {
		holes: [
			{
				status: 'filled',
				moveChecks: { '3': 1, '5': 2 }
			},
			{
				status: 'filled',
				moveChecks: { '6': 3, '8': 4 }
			},
			{
				status: 'filled',
				moveChecks: { '7': 4, '9': 5 }
			},
			{
				status: 'filled',
				moveChecks: { '0': 1, '5': 4, '12': 7, '10': 6 }
			},
			{
				status: 'filled',
				moveChecks: { '11': 7, '13': 8 }
			},
			{
				status: 'filled',
				moveChecks: { '0': 2, '3': 4, '12': 8, '14': 9 }
			},
			{
				status: 'filled',
				moveChecks: { '1': 3, '8': 7 }
			},
			{
				status: 'filled',
				moveChecks: { '2': 4, '9': 8 }
			},
			{
				status: 'filled',
				moveChecks: { '1': 4, '6': 7 }
			},
			{
				status: 'filled',
				moveChecks: { '2': 5, '7': 8 }
			},
			{
				status: 'filled',
				moveChecks: { '3': 6, '12': 11 }
			},
			{
				status: 'filled',
				moveChecks: { '4': 7, '13': 12 }
			},
			{
				status: 'filled',
				moveChecks: { '10': 11, '3': 7, '5': 8, '14': 13 }
			},
			{
				status: 'filled',
				moveChecks: { '11': 12, '4': 8 }
			},
			{
				status: 'filled',
				moveChecks: { '12': 13, '5': 9 }
			}
		],
		pendingHole: null,
		removeFirstPeg: false
	};

	componentDidMount() {
		const firstInRow = [1, 3, 6, 10];
		const board = document.querySelector('.board');
		document.querySelectorAll('.hole').forEach(hole => {
			const holeIndex = parseInt(hole.getAttribute('data-key'), 10);
			if (firstInRow.includes(holeIndex)) {
				const br = document.createElement('br');
				board.insertBefore(br, hole);
			}
			hole.addEventListener('click', this.handleHoleClick);
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.gameStatus === 'Restart') {
			this.handleRestart();
		} else if (
			prevProps.gameStatus !== 'In Progress' &&
			this.props.gameStatus === 'In Progress'
		) {
			if (prevProps.gameStatus === 'Game Ended') {
				this.resetBoard();
			}
			this.handleStart();
		}
	}

	handleStart = () => {
		this.setState({ removeFirstPeg: true });
	};

	handleRestart = () => {
		this.resetBoard();
		this.props.startGame();
	};

	resetBoard = () => {
		const holes = this.state.holes;
		for (let hole in holes) {
			holes[hole].status = 'filled';
		}
		this.setState({ holes, pendingHole: null });
	};

	handleHoleClick = e => {
		// Nothing happens if game is not 'In Progress'
		if (this.props.gameStatus !== 'In Progress') return;

		const holeIndex = parseInt(e.currentTarget.getAttribute('data-key'), 10);
		const hole = this.state.holes[holeIndex];

		// Remove First Peg
		if (this.state.removeFirstPeg) {
			this.removePeg(holeIndex);
			this.setState({ removeFirstPeg: false });
			return;
		}

		const pendingHoleIndex = this.state.pendingHole;

		// Choose peg to move
		if (pendingHoleIndex === null) {
			hole.status === 'filled'
				? this.setState({ pendingHole: holeIndex })
				: console.log('There is no peg here');
			return;
		}

		const destHole = this.state.holes[holeIndex];

		// Destination hole is not empty
		if (destHole.status === 'filled') {
			this.setState({ pendingHole: null });
			console.log('There is already a peg here, please try again.');
			return;
		}

		const pendingHole = this.state.holes[pendingHoleIndex];

		if (
			!pendingHole.moveChecks[holeIndex] ||
			this.state.holes[pendingHole.moveChecks[holeIndex]] === 'empty'
		) {
			// Destination is not valid for pending hole
			// or destination hole is not empty
			this.setState({ pendingHole: null });
			console.log('Not a valid move, please try again.');
		} else {
			// Remove peg from pending hole
			// Remove peg from jumped hole
			// Fill destination hole
			const newHolesState = this.state.holes;
			this.removePeg(pendingHoleIndex);
			this.removePeg(pendingHole.moveChecks[holeIndex]);
			this.addPeg(holeIndex);
			this.setState({ pendingHole: null });

			// Check for last peg
			if (
				this.state.holes.filter(hole => hole.status === 'filled').length === 1
			) {
				this.props.endGame();
				setTimeout(() => window.alert('You Win!!!'), 0);
			}
		}
	};

	removePeg = hole => {
		const newHolesState = this.state.holes;
		newHolesState[hole].status = 'empty';
		this.setState({ holes: newHolesState });
	};

	addPeg = hole => {
		const newHolesState = this.state.holes;
		newHolesState[hole].status = 'filled';
		this.setState({ holes: newHolesState });
	};

	render() {
		return (
			<div className="board">
				{this.state.holes.map((hole, i) => (
					<div className="hole" key={i} data-key={i}>
						{hole.status === 'filled' && (
							<Peg pegPending={this.state.pendingHole === i ? true : false} />
						)}
					</div>
				))}
			</div>
		);
	}
}
