import LayoutDashboard from 'components/layouts/layoutDashboard/LayoutDashboard'

import s from './Overview.module.scss'
import CardsBlock from './cardsBlock/CardsBlock'
import GoalsBlock from './goalsBlock/GoalsBlock'

const Overview = () => {
	return (
		<LayoutDashboard>
			<div className={s.container}>
				<div className={s.leftSide}>
					<CardsBlock />
				</div>
				<div className={s.rightSide}>
					<GoalsBlock/>
				</div>
			</div>
		</LayoutDashboard>
	)
}

export default Overview
