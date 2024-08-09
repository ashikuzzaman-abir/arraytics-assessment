import React from 'react';

const ProductList = ({ products }) => {
	console.log('ProductList rendered');
	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} - ${product.price}
				</li>
			))}
		</ul>
	);
};

export default ProductList;
