import s from './StatBlock.module.scss'
import StatItem from './statItem/StatItem'

type Props = {}

const StatBlock = (props: Props) => {
	return (
		<div className={s.container}>
			<div className={s.innerBlock}>
				<h3 className='titleBlock'>Outcome Statistics</h3>
				<div className={s.statItems}>
					<StatItem text={'Shopping'} color={'orange'} percent={'52'} total={3000} current={1560} />
					<StatItem text={'Electronics'} color={'green'} percent={'23'} total={3000} current={690} />
					<StatItem text={'Travels'} color={'#70A6E8'} percent={'25'} total={3000} current={750} />
				</div>
			</div>
		</div>
	)
}

export default StatBlock
