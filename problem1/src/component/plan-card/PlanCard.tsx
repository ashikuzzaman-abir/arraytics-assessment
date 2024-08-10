import React from 'react';
import styled from 'styled-components';
import CardWrapper from './CardWrapper';
import { accentColor } from '@/theme';
import CardsContainer from '../containers/CardsContainer';
import CardMainContainer from './CardMainContainer';
import PlanName from './PlanName';
import CardHead from './CardHead';
import Tag from './Tag';
import SubmitButton from './SubmitButton';
import FeatureList from './FeatureList';
import DropDown from './DropDown';

type PlanCardProps = {};

const PlanCard: React.FC<PlanCardProps> = () => {
	return (
		<CardWrapper $color={accentColor.Basic.primary}>
			<CardHead
				color={accentColor.Basic.primary}
				price={`$399`}
				pricePostfix='/monthly'
				discount={'$450 /monthly'}
				planName='Basic'
			/>
			<Tag
				body='Basic'
				tooltipContent='Basic Plan hello hello '
				color={accentColor.Basic.primary}
				bgColor={accentColor.Basic.secondary}
			/>
			<DropDown
				color={accentColor.Basic.primary}
				bgColor={accentColor.Basic.secondary}
				options={[
					{
						label: '1 month',
						value: '1',
					},
					{
						label: '3 months',
						value: '3',
					},
					{
						label: '6 months',
						value: '6',
					},
					{
						label: '12 months',
						value: '12',
					},
				]}
				selected={{
					label: '1 month',
					value: '1',
				}}
				onOptionSelect={() => {}}
			/>
			<FeatureList type='pro' />
			<SubmitButton $color={accentColor.Basic.primary}>
				Select Plan
			</SubmitButton>
		</CardWrapper>
	);
};

export default PlanCard;
