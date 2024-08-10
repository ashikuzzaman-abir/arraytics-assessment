import styled from 'styled-components';

const SubmitButton = styled.button<{ $color: string }>`
	background-color: ${(props) => props.$color};
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	border: none;
	border-radius: 8px;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: 400;
	cursor: pointer;
	width: 100%;
	height: 40px;
	margin-top: auto;
`;

export default SubmitButton;
