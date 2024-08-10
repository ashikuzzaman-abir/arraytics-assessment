import styled from 'styled-components';

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
	@media screen and (max-width: 468px) {
		padding: 0 8px;
	}
`;

export default MainWrapper;
