import { ICard } from 'interfaces/ICard'

import s from './Cards.module.scss'

type TCard = {
	card: ICard
}

const Card = (props: TCard) => {
	const maskCardNumber = (cardNumber: string): string => {
		const visibleDigits = 4
		const maskedPart = '*'.repeat(cardNumber.length - visibleDigits)
		const visiblePart = cardNumber.slice(-visibleDigits)
		return (maskedPart + visiblePart).replace(/(.{4})/g, '$1 ')
	}

	return (
		<div className={s.container}>
			<div className={s.bankName}>
				<span>{props.card.bank}</span>
			</div>
			<div className={s.cardNumber}>
				<span>{maskCardNumber(props.card.cardNumber)}</span>
			</div>
			<div className={s.cardInform}>
				<div className={s.cardHolder}>
					Card holder
					<span>{props.card.cardHolder}</span>
				</div>
				<div className={s.expire}>
					Expire date
					<span>{props.card.expire}</span>
				</div>
			</div>
		</div>
	)
}

export default Card
