import React, { useEffect } from 'react';
import styled from 'styled-components';
import CardWrapper from '../plan-card/CardWrapper';
import { accentColor } from '@/theme';
import CardHead from '../plan-card/CardHead';
import Tag from '../plan-card/Tag';
import DropDown from '../plan-card/DropDown';
import FeatureList from '../plan-card/FeatureList';
import SubmitButton from '../plan-card/SubmitButton';
import { plans } from '@/data/plans';
import { useAppDispatch, useAppSelector } from '@/store';
import { setSelectedGrowth } from '@/store/slices/plans';

type PlanCardProps = {};

const GrowthPlanCard: React.FC<PlanCardProps> = () => {
	const planName = 'Growth';
	const dispatch = useAppDispatch();
	const billingMode = useAppSelector((state: any) => state.plans.billingMode);
	const selectedGrowth = useAppSelector(
		(state: any) => state.plans.selectedGrowth
	);

	const _plans = plans.plans.filter((plan: any) => plan.name === planName);
	const [selectedPlan, setSelectedPlan] = React.useState(_plans[0]);

	const optionChangeHandler = (plan: any) => {
		dispatch(setSelectedGrowth(plan.value));
	};

	useEffect(() => {
		if (selectedGrowth === '') {
			setSelectedPlan(_plans[0]);
		} else {
			// setSelectedPlan(_plans[0]);
			console.log(selectedGrowth);
			setSelectedPlan(
				_plans.find((plan: any) => plan.title === selectedGrowth)
			);
		}
	}, [selectedGrowth]);

	return (
		<CardWrapper $color={accentColor[planName].primary}>
			<CardHead
				color={accentColor[planName].primary}
				price={
					billingMode === 'Billed monthly'
						? `${selectedPlan?.details['1_year'].price}`
						: `${selectedPlan?.details['2_year'].price}`
				}
				pricePostfix={
					billingMode === 'Billed monthly'
						? `${selectedPlan?.details['1_year'].price_postfix}`
						: `${selectedPlan?.details['2_year'].price_postfix}`
				}
				discount={
					billingMode === 'Billed yearly'
						? `${selectedPlan?.details['1_year'].price}/monthly`
						: undefined
				}
				planName={selectedPlan?.name}
			/>
			{_plans.length === 1 ? (
				<Tag
					body={selectedPlan.title}
					tooltipContent={selectedPlan.text}
					color={accentColor[planName].primary}
					bgColor={accentColor[planName].secondary}
				/>
			) : (
				<DropDown
					color={accentColor[planName].primary}
					bgColor={accentColor[planName].secondary}
					options={_plans.map((plan: any) => ({
						label: plan.title,
						value: plan.title,
					}))}
					selected={{
						label: selectedPlan.title,
						value: selectedPlan.title,
					}}
					onOptionSelect={optionChangeHandler}
					tooltipContent={selectedPlan.text}
				/>
			)}

			<FeatureList type='pro' />
			<SubmitButton $color={accentColor[planName].primary}>
				Select Plan
			</SubmitButton>
		</CardWrapper>
	);
};

export default GrowthPlanCard;
