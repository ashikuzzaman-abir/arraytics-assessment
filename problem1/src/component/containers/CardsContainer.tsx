import styled from 'styled-components';

const CardsContainer = styled.div`
	display: grid;
	flex-wrap: wrap;
	gap: 20px;
	grid-template-columns: repeat(1, 1fr);

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default CardsContainer;
