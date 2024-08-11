import styled from 'styled-components';

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 4px;
	min-height: 100vh;
	@media screen and (max-width: 468px) {
		padding: 0 16px;
	}
	@media (max-width: 1024px) {
		padding: 0 16px;
	}
`;

export default MainWrapper;
