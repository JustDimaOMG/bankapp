import { Stats } from 'data/Stats.data'

import s from './StatItem.module.scss'

type Props = {
	text: string
	color: string
	percent: string
	total: number
	current: number
}

const StatItem = (props: Props) => {
	const stat = Stats.find(stat => stat.name === props.text)

	if (!stat) {
		return ''
	}
	const totalLimit = props.total
	const currentLimit = props.current
	const progressWidth = (currentLimit / totalLimit) * 100
	const progressBarWidth = (progressWidth / 100) * 380

	return (
		<div className={s.container}>
			<div className={s.inner}>
				<div className={s.image}>
					<img src={stat.icon} alt={props.text} draggable={false} />
				</div>
				<div className={s.rangeCont}>
					<div className={s.range}>
						<div className={s.progressWidth}></div>
						<div
							className={s.progressBar}
							style={{
								width: `${progressBarWidth}px`,
								backgroundColor: `${props.color}`
							}}
						></div>
					</div>
					<div className={s.rangeText}>{props.text}</div>
				</div>

				<div className={s.percent}>{props.percent}%</div>
			</div>
		</div>
	)
}

export default StatItem
