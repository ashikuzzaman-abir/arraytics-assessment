// Button.js
import React from 'react';

const Button = ({ variant, children, onClick }) => {
	const renderContent = () => {
		if (variant === 'icon-arrow-primary') {
			return (
				<button
					style={{ backgroundColor: 'blue', color: 'white' }}
					onClick={onClick}
				>
					<span>&rarr;</span> {children}
				</button>
			);
		} else if (variant === 'icon-arrow-secondary') {
			return (
				<button
					style={{ backgroundColor: 'gray', color: 'black' }}
					onClick={onClick}
				>
					<span>&rarr;</span> {children}
				</button>
			);
		} else if (variant === 'primary') {
			return (
				<button
					style={{ backgroundColor: 'blue', color: 'white' }}
					onClick={onClick}
				>
					{children}
				</button>
			);
		} else if (variant === 'secondary') {
			return (
				<button
					style={{ backgroundColor: 'gray', color: 'black' }}
					onClick={onClick}
				>
					{children}
				</button>
			);
		} else {
			return <button onClick={onClick}>{children}</button>;
		}
	};

	return renderContent();
};

export default Button;
