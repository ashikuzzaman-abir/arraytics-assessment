'use client';
// import styles from './page.module.css';
import MainWrapper from '@/component/wrappers/MainWrapper';
import PlanCard from '@/component/plan-card/PlanCard';
import BillingSelector from '@/component/billing-selector/BillingSelector';
import styled from 'styled-components';
import GrowthPlanCard from '@/component/plans/GrowthPlanCard';
import CardsContainer from '@/component/containers/CardsContainer';
import FreePlanCard from '@/component/plans/FreePlanCard';
import BasicPlanCard from '@/component/plans/BasicPlanCard';
import ProPlanCard from '@/component/plans/ProPlanCard';

const BillingSelectionSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export default function Home() {
	return (
		<main
			style={{
				overflowX: 'hidden',
			}}
		>
			<MainWrapper>
				<div style={{ height: '100px' }} />
				<BillingSelectionSection>
					<BillingSelector />
				</BillingSelectionSection>
				<CardsContainer>
					<FreePlanCard />
					<BasicPlanCard />
					<ProPlanCard />
					<GrowthPlanCard />
				</CardsContainer>
			</MainWrapper>
		</main>
	);
}
