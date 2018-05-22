import React from 'react';
import '../css/Rules.css';

const Rules = () => (
	<ol className="rules">
		<li>Start game and click first peg to remove it from the board.</li>
		<li>
			Click one peg to jump over another, into an empty space, and removing the
			peg that was jumped over. Keep jumping until only one peg is left.
		</li>
		<li>You may only jump in a straight line.</li>
	</ol>
);

export default Rules;
