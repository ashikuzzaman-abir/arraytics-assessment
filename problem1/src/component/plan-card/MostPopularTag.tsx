import React from 'react';
import styled from 'styled-components';

const Tag = styled.div<{ $color: string }>`
	font-size: 12px;
	font-weight: 500;
	padding: 6px 8px;
	background-color: ${(props) => props.$color};
	color: white;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 8px;
	right: 8px;
`;

type MostPopularTagProps = {
	color: string;
};

const MostPopularTag: React.FC<MostPopularTagProps> = ({ color }) => {
	return <Tag $color={color}>Most Popular</Tag>;
};

export default MostPopularTag;
