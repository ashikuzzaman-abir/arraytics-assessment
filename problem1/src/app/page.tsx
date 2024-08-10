'use client';
// import styles from './page.module.css';
import MainWrapper from '@/component/wrappers/MainWrapper';
import Tooltip from '@/component/tooltip/Tooltip';
import PlanCard from '@/component/plan-card/PlanCard';

export default function Home() {
	return (
		<main>
			<MainWrapper>
				<div style={{ height: '300px' }} />
				<div style={{ width: '250px', height: '600px' }}>
					<PlanCard />
				</div>
			</MainWrapper>
		</main>
	);
}
