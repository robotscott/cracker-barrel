import React, { Component } from 'react';
import Peg from './Peg';
import '../css/Board.css';

export default class extends Component {
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

	handleHoleClick = e => {
		// Nothing happens if game is not 'In Progress'
		if (this.props.gameStatus !== 'In Progress') return;

		const holeIndex = parseInt(e.currentTarget.getAttribute('data-key'), 10);
		const hole = this.props.holes[holeIndex];

		// Remove First Peg
		if (this.props.removeFirstPeg) {
			this.props.removePeg(holeIndex);
			this.props.endFirstMove();
			return;
		}

		const pendingHoleIndex = this.props.pendingHole;

		// Choose peg to move
		if (pendingHoleIndex === null) {
			hole.status === 'filled'
				? this.props.setPendingHole(holeIndex)
				: window.alert('There is no peg here');
			return;
		}

		const destHole = this.props.holes[holeIndex];

		// Destination hole is not empty
		if (destHole.status === 'filled') {
			this.props.setPendingHole();
			window.alert('There is already a peg here, please try again.');
			return;
		}

		const pendingHole = this.props.holes[pendingHoleIndex];
		const jumpHoleIndex = pendingHole.moveChecks[holeIndex];
		const jumpHole = this.props.holes[jumpHoleIndex];

		if (!pendingHole.moveChecks[holeIndex] || jumpHole.status === 'empty') {
			// Destination is not valid for pending hole
			// or destination hole is not empty
			this.props.setPendingHole();
			window.alert('Not a valid move, please try again.');
		} else {
			// Remove peg from pending hole
			// Remove peg from jumped hole
			// Fill destination hole
			const newHolesState = this.props.holes;
			this.props.removePeg(pendingHoleIndex);
			this.props.removePeg(jumpHoleIndex);
			this.props.addPeg(holeIndex);
			this.props.setPendingHole();

			// Check for last peg
			if (
				this.props.holes.filter(hole => hole.status === 'filled').length === 1
			) {
				this.props.endGame();
				setTimeout(() => window.alert('You Win!!!'), 0);
			}
		}
	};

	render() {
		return (
			<div className="board">
				{this.props.holes.map((hole, i) => (
					<div className="hole" key={i} data-key={i}>
						{hole.status === 'filled' && (
							<Peg pegPending={this.props.pendingHole === i ? true : false} />
						)}
					</div>
				))}
			</div>
		);
	}
}
