import QuestPopUp from 'components/ui/questPopUp/QuestPopUp'
import { useEffect, useState } from 'react'
import { FaCircleQuestion } from 'react-icons/fa6'

import s from './HalvingCounter.module.scss'

interface CountdownProps {
	targetDate: Date
}

const HalvingCounter: React.FC<CountdownProps> = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const now = new Date().getTime()
		const difference = targetDate.getTime() - now

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 }
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((difference % (1000 * 60)) / 1000)

		return { days, hours, minutes, seconds }
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)
  const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft)
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [targetDate])

  const handleIconEnter = () => {
    setIsVisible(true);
  };

  const handleIconLeave = () => {
    setIsVisible(false);
  };

	return (
		<div className={s.halvingCounter}>
			<div className={s.innerBlock}>
				<div className={s.textBlock}>
					<h6>
						Countdown to bitcoin halving{' '}
						<FaCircleQuestion className={s.iconQues} onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave}/>
					</h6>
          {isVisible && 
            <div className={s.questPopUp}>
              <QuestPopUp text="After Bitcoin's fourth halving in 2024, the amount of reward for mining Bitcoin will be halved. The halving will also reduce the rate of new coin creation and reduce the total supply of new coins. Previously, halving led to price volatility as investors expected a rally after the process was completed" />
            </div>
          }
				</div>
				<div className={s.countdown}>
					<p>
						{timeLeft.days} <span>D</span>
					</p>
					<p>
						{timeLeft.hours} <span>H</span>
					</p>
					<p>
						{timeLeft.minutes} <span>M</span>
					</p>
					<p>
						{timeLeft.seconds} <span>S</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default HalvingCounter
