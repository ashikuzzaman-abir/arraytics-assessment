import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addProduct({ name, price: parseFloat(price) });
		setName('');
		setPrice('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Product Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Product Price'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<button type='submit'>Add Product</button>
		</form>
	);
};

export default AddProductForm;
