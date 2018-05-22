import React from 'react';

import github from '../images/GitHub.png';

const Footer = () => (
	<div className="footer">
		<ol className="rules">
			<li>Start game and click first peg to remove it from the board.</li>
			<li>
				Click one peg to jump over another, into an empty space, and removing
				the peg that was jumped over. Keep jumping until only one peg is left.
			</li>
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

export default Footer;
