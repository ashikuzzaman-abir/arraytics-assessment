import styled from 'styled-components';

const Amount = styled.h3<{ $color: string }>`
	font-size: 32px;
	font-weight: 600;
  color: ${(props) => props.$color};
`;


export default Amount;