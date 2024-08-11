// src/features/billing/BillingSelector.tsx
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setBillingPeriod } from '@/store/slices/plans';
import { useAppDispatch, useAppSelector } from '@/store';
import { borderColor, menuTagColor, textColors } from '@/theme';
import { plans } from '@/data/plans';

const BillingSelectorContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 32px 0px;
	/* background-color: #f5f5fa; */
`;

type BillingOptionProps = {
	active: boolean;
}

const BillingOption = styled.div<BillingOptionProps>`
	padding: 4px 0;
	cursor: pointer;
	position: relative;
	font-size: 16px;
	color: ${(props) => (props.active ? textColors.active : textColors.primary)};
	border-bottom: ${(props) =>
		props.active ? `2px solid ${textColors.active}` : 'none'};
	font-weight: ${(props) => (props.active ? '600' : '400')};
	margin: 0 12px;
`;

const OptionContainer = styled.div<{ isLast: boolean }>`
	display: flex;
	align-items: center;
	border-right: ${(props) =>
		props.isLast ? 'none' : `1px solid ${borderColor}`};
`;

const SaveTag = styled.div`
	padding: 5px 10px;
	background-color: ${menuTagColor};
	color: ${textColors.primary};
	font-weight: 400;
	border-radius: 20px;
	margin-left: 10px;
	font-size: 16px;
	cursor: pointer;
`;

const BillingSelector: React.FC = () => {
	const dispatch = useAppDispatch();
	const billingPeriod = useAppSelector((state) => state.plans.billingMode);

	const handleSelect = (period: any) => {
		dispatch(setBillingPeriod(period));
	};

	return (
		<BillingSelectorContainer>
			{Object.keys(plans.plansInfo).map((key: string, index: number) => (
				<OptionContainer
					key={key}
					isLast={index === Object.keys(plans.plansInfo).length - 1}
				>
					<BillingOption
						active={billingPeriod === plans.plansInfo[key].title}
						onClick={() => handleSelect(plans.plansInfo[key].title)}
					>
						{plans?.plansInfo[key]?.title}
					</BillingOption>
					{plans.plansInfo[key].discount !== '' && (
						<SaveTag>{plans.plansInfo[key].discount}</SaveTag>
					)}
				</OptionContainer>
			))}
		</BillingSelectorContainer>
	);
};

export default BillingSelector;
