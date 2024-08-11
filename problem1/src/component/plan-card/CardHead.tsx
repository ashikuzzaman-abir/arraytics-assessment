import React from 'react';
import styled from 'styled-components';
import PlanName from './PlanName';
import Amount from './Amount';
import Discount from './Discount';
import PricePostfix from './PricePostfix';

const HeadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const PricingSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	padding: 10px 0;
	margin-bottom: 4px;
`;

const PricingRight = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-end;
	margin-top: -8px;
`;

type CardHeadProps = {
	planName: string;
	price: string;
	discount?: string;
	pricePostfix?: string;
	color: string;
};

const CardHead: React.FC<CardHeadProps> = ({
	planName,
	price,
	discount,
	pricePostfix,
	color,
}) => {
	return (
		<HeadWrapper>
			<PlanName>{planName}</PlanName>
			<PricingSection>
				<Amount $color={color}>{price}</Amount>
				<PricingRight>
					{discount && <Discount>{discount}</Discount>}
					{pricePostfix && <PricePostfix>{pricePostfix}</PricePostfix>}
				</PricingRight>
			</PricingSection>
		</HeadWrapper>
	);
};

export default CardHead;
