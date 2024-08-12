import { plans } from '@/data/plans';
import React from 'react';
import styled from 'styled-components';
import Tooltip from '../tooltip/Tooltip';
import { textColors } from '@/theme';

const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 18px 0 0 0;
	width: 100%;
	gap: 8px;
`;

const FeatureListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
	padding: 0 0 32px 0;
	user-select: none;
`;

const FeatureTitle = styled.h3`
	font-size: 16px;
	font-weight: 500;
	color: ${textColors.primary};
	padding: 8px 0;
	user-select: none;
`;

const TooltipText = styled.p`
	font-size: 15px;
	font-weight: 400;
	color: ${textColors.primary};
`;

type FeatureListProps = {
	type: 'free' | 'pro';
	selectedPlan?: {
		feature_desc: string;
		feature_title: string;
	};
};
const FeatureList: React.FC<FeatureListProps> = ({ type, selectedPlan }) => {
	const features = plans.features;
	const freeFeatures = features.filter(
		(feature: any) => feature.is_pro === '0'
	);
	let proFeatures = features.filter((feature: any) => feature.is_pro === '1');

	if (selectedPlan) {
		proFeatures = [selectedPlan, ...proFeatures];
	}

	if (type === 'free') {
		return (
			<FeatureContainer>
				<FeatureTitle>Free includes:</FeatureTitle>
				<FeatureListWrapper>
					{freeFeatures.map((feature: any, index: number) => (
						<Tooltip key={index} text={feature.feature_desc}>
							<TooltipText>{feature.feature_title}</TooltipText>
						</Tooltip>
					))}
				</FeatureListWrapper>
			</FeatureContainer>
		);
	}
	return (
		<FeatureContainer>
			<FeatureTitle>Everything in free plus:</FeatureTitle>

			<FeatureListWrapper>
				{proFeatures.map((feature: any, index: number) => (
					<Tooltip key={index} text={feature.feature_desc}>
						<TooltipText
							dangerouslySetInnerHTML={{
								__html: feature.feature_title,
							}}
						/>
					</Tooltip>
				))}
			</FeatureListWrapper>
		</FeatureContainer>
	);
};

export default FeatureList;
