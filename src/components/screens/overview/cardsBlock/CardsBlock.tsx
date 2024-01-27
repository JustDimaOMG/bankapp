import { useState } from 'react'

import s from './CardsBlock.module.scss'
import CardCalc from './cardCalc/CardCalc'
import SwiperCard from './swiperCard/SwiperCard'
import { useCardBlock } from './useCardBlock'
import { useAppSelector } from 'hooks/useActions'
import LimitPay from './limitPay/LimitPay'

const CardsBlock = () => {
	const [error, setError] = useState<string | null>(null)
	const cardData = useAppSelector(state => state.cards.cardState) || []

	useCardBlock(setError)

	

	return (
		<div className={s.container}>
			<h3 className='titleBlock'>Cards</h3>
				{!error && cardData.length > 0 ? (
					<>
						<div className={s.cardInfo}>
							<SwiperCard />
							<span className={s.divide}></span>
							<CardCalc />
						</div>
						<div className={s.lowerBlock}>
							<LimitPay/>
      			</div>
					</>
				) : (
					<div>{error}</div>
				)}
		</div>
	)
}

export default CardsBlock
