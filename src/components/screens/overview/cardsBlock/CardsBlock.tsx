import { useAppSelector } from 'hooks/useActions'

import s from './CardsBlock.module.scss'
import CardCalc from './cardCalc/CardCalc'
import LimitPay from './limitPay/LimitPay'
import SwiperCard from './swiperCard/SwiperCard'
import { useCardBlock } from './useCardBlock'

const CardsBlock = () => {
	const cardData = useAppSelector(state => state.cards.cardState) || []

	useCardBlock()

	return (
		<div className={s.container}>
			<h3 className='titleBlock'>Cards</h3>
			{ cardData.length > 0 ? (
				<>
					<div className={s.cardInfo}>
						<SwiperCard />
						<span className={s.divide}></span>
						<CardCalc />
					</div>
					<div className={s.lowerBlock}>
						<LimitPay />
					</div>
				</>
			) : (
				<div>You don't have any cards yet</div>
			)}
		</div>
	)
}

export default CardsBlock
