// Button.js
import React from 'react';

const Button = ({ variant, children, onClick }) => {
	const styles = {
		'icon-arrow-primary': {
			backgroundColor: 'blue',
			color: 'white',
			icon: true,
		},
		'icon-arrow-secondary': {
			backgroundColor: 'gray',
			color: 'black',
			icon: true,
		},
		primary: { backgroundColor: 'blue', color: 'white' },
		secondary: { backgroundColor: 'gray', color: 'black' },
	};

	const { backgroundColor, color, icon } = styles[variant] || {};

	return (
		<button style={{ backgroundColor, color }} onClick={onClick}>
			{icon && <span>&rarr;</span>} {children}
		</button>
	);
};

export default Button;
