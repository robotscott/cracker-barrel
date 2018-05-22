import React from 'react';

const Header = props => (
	<header>
		<h1>Peg Game</h1>
		<h2 className="gameStatus">Game Status: {props.gameStatus}</h2>
	</header>
);

export default Header;
