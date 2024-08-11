import React from 'react';
import styled from 'styled-components';
import Tooltip from '../tooltip/Tooltip';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const TagWrapper = styled.div<{ $bgColor: string; $color: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.$color};
	background-color: ${(props) => props.$bgColor};
	border-radius: 32px;
	padding: 4px 15px;
	font-size: 14px;
	gap: 4px;
	width: 100%;
	@media screen and (max-width: 1000px) {
		width: fit-content;
	}
`;

const TagText = styled.p<{ $color: string }>`
	color: ${(props) => props.$color};
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -1px;
`;

type TagProps = {
	body: any;
	tooltipContent: string;
	color: string;
	bgColor: string;
};

const Tag: React.FC<TagProps> = ({ body, tooltipContent, color, bgColor }) => {
	return (
		<TagWrapper $color={body.color} $bgColor={bgColor}>
			<TagText
				$color={color}
				dangerouslySetInnerHTML={{ __html: body }}
			></TagText>
			<div
				style={{
					marginTop: '2px',
				}}
			>
				<Tooltip text={tooltipContent}>
					<IoIosInformationCircleOutline fontSize={'20px'} color={color} />
				</Tooltip>
			</div>
		</TagWrapper>
	);
};

export default Tag;
