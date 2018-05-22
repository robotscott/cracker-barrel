import React from 'react';

const Header = props => (
	<div className="header">
		<h1>Peg Game</h1>
		<h2 className="gameStatus">Game Status: {props.gameStatus}</h2>
	</div>
);

export default Header;
