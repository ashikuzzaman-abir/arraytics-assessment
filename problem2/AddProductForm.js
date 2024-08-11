import React, { useState, useCallback } from 'react';

const AddProductForm = ({ addProduct }) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const handleNameChange = useCallback((e) => {
		setName(e.target.value);
	}, []);

	const handlePriceChange = useCallback((e) => {
		setPrice(e.target.value);
	}, []);

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			if (name && price) {
				addProduct({ name, price: parseFloat(price) });
				setName('');
				setPrice('');
			}
		},
		[name, price, addProduct]
	);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Product Name'
				value={name}
				onChange={handleNameChange}
			/>
			<input
				type='number'
				placeholder='Product Price'
				value={price}
				onChange={handlePriceChange}
			/>
			<button type='submit'>Add Product</button>
		</form>
	);
};

export default React.memo(AddProductForm);
