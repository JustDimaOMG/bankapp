import GoalComp from 'components/screens/overview/goalsBlock/goalComp/GoalComp'
import { useAppSelector } from 'hooks/useActions'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoAdd } from 'react-icons/io5'

import s from './GoalsBlock.module.scss'
import PopUpGoal from './popUpGoal/PopUpGoal'
import { useGoalsBlock } from './useGoalsBlock'

const GoalsBlock = () => {
	const [error, setError] = useState<string | null>(null)
	const goalsData = useAppSelector(state => state.goals.goalState) || []

	useGoalsBlock(setError)

	const [startSlide, setStartSlide] = useState(0)
	const slidesToShow = 3

	const prevSlide = () => {
		setStartSlide(prev => Math.max(prev - 1, 0))
	}

	const nextSlide = () => {
		setStartSlide(prev => Math.min(prev + 1, goalsData.length - slidesToShow))
	}

	// const { isShow, ref, setIsShow } = useOnClickOutside({
	// 	isInitialValue: false
	// })
	// ref={ref as React.RefObject<HTMLDivElement>}

	const [isShow, setIsShow] = useState(false)

	return (
		<div className={s.container}>
			<div className={s.upperBlock}>
				<h3 className='titleBlock'>Goals</h3>
				<div >
					<button className={s.addGoal} onClick={() => setIsShow(!isShow)}>
						<IoAdd />
					</button>
					{isShow && (
						<div className={s.poUpCont}>
							<div>
								<PopUpGoal setIsShow={setIsShow} />
							</div>
						</div>
					)}
				</div>
			</div>
			<div className={s.lowerBlock}>
				{!error && goalsData.length >= 0 ? (
					<>
						{startSlide !== 0 && (
							<div className={s.leftArrow}>
								<IoIosArrowBack onClick={prevSlide} size={30} />
							</div>
						)}
						<div className={s.sliders}>
							{goalsData
								.slice(startSlide, startSlide + slidesToShow)
								.map((goal, index) => (
									<GoalComp
										key={index}
										amount={goal.amount}
										date={goal.date}
										title={goal.title}
										icon={goal.icon}
										id={goal.id}
									/>
								))}
						</div>
						{startSlide !== goalsData.length - 3 && goalsData.length > 3 && (
							<div className={s.rightArrow}>
								<IoIosArrowForward onClick={nextSlide} size={30} />
							</div>
						)}
					</>
				) : (
					<div>{error}</div>
				)}
			</div>
		</div>
	)
}

export default GoalsBlock
