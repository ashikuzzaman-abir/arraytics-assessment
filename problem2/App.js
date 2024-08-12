import React, { useState, useCallback, useMemo } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
	const [products, setProducts] = useState([
		{ id: 1, name: 'Apple', price: 1 },
		{ id: 2, name: 'Banana', price: 2 },
	]);

	const addProduct = useCallback((product) => {
		setProducts((prevProducts) => [
			...prevProducts,
			{ ...product, id: prevProducts.length + 1 },
		]);
	}, []);

	const memoizedProducts = useMemo(() => products, [products]);

	return (
		<div>
			<h1>Product List</h1>
			<AddProductForm addProduct={addProduct} />
			<ProductList products={memoizedProducts} />
		</div>
	);
};

export default App;
