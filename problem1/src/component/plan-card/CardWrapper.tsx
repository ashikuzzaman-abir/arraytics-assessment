import { borderColor } from '@/theme';
import styled from 'styled-components';

const CardWrapper = styled.div<{ $color: string }>`
	border-radius: 8px;
	padding: 24px 20px;
	flex-direction: column;
	display: flex;
	width: 100%;
	height: 100%;
	border: 1px solid ${borderColor};
	border-top: 8px solid ${(props) => props.$color};
`;

export default CardWrapper;
