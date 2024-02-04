import LayoutDashboard from 'components/layouts/layoutDashboard/LayoutDashboard'

import s from './Overview.module.scss'
import CardsBlock from './cardsBlock/CardsBlock'
import GoalsBlock from './goalsBlock/GoalsBlock'
import TransactionsBlock from './transactionsBlock/TransactionsBlock'
import StatBlock from './statBlock/StatBlock'

const Overview = () => {
	return (
		<LayoutDashboard>
			<div className={s.container}>
				<div className={s.leftSide}>
					<CardsBlock />
					<TransactionsBlock/>
				</div>
				<div className={s.rightSide}>
					<GoalsBlock/>
					<StatBlock/>
				</div>
			</div>

		</LayoutDashboard>
	)
}

export default Overview
