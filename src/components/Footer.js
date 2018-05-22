import React from 'react';

import github from '../images/GitHub.png';

const Footer = () => (
	<footer>
		<div className="github">
			<a
				href="https://github.com/robotscott/cracker-barrel"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={github} alt="GitHub" />
			</a>
		</div>
	</footer>
);

export default Footer;
