import React from 'react';
import '../css/Peg.css';

const Peg = props => (
	<div className={`peg${props.pegPending ? ' pending' : ''}`} />
);

export default Peg;
