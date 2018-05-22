import React from 'react';

const Buttons = props => {
	const restart = () => {
		props.resetBoard();
		props.startGame();
	};
	return (
		<div className="buttons">
			{props.gameStatus !== 'In Progress' ? (
				<button
					onClick={
						props.gameStatus === 'Not Started' ? props.startGame : restart
					}
				>
					Start Game
				</button>
			) : (
				<div>
					<button onClick={props.endGame}>End Game</button>
					<button onClick={restart}>Restart</button>
				</div>
			)}
		</div>
	);
};

export default Buttons;
