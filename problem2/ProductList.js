import React from 'react';

const ProductList = ({ products }) => {
	console.log('ProductList rendered');
	return (
		<ul>
			{products.map(({ id, name, price }) => (
				<li key={id}>
					{name} - ${price}
				</li>
			))}
		</ul>
	);
};

export default React.memo(ProductList);
