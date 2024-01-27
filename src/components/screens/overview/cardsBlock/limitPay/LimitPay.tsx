import { useAppSelector } from 'hooks/useActions'

import s from './LimitPay.module.scss'

const LimitPay = () => {
	const cardData = useAppSelector(state => state.cards.cardState) || []
	const currentIndex = useAppSelector(state => state.cards.currentSlide)

	const totalLimit = parseInt(cardData[currentIndex].limit)

	const currentLimit = parseInt(cardData[currentIndex].outcome)

	const progressWidth = (currentLimit / totalLimit) * 100
	const progressBarWidth = (progressWidth / 100) * 320


	return (
		<div className={s.container}>
      <div>
        <div className={s.progressWidth}></div>
        <div
          className={s.progressBar}
          style={{
            width: `${progressBarWidth}px`
          }}
        ></div>
      </div>
      <div className={s.info}>
        <span>Weekly payment limit</span>
        <span>${currentLimit} / ${totalLimit}</span>
      </div>
		</div>
	)
}

export default LimitPay
