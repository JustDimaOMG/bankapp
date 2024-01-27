import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Card from './Card/Card'
import s from './SwiperCard.module.scss'
import { useActions, useAppSelector } from 'hooks/useActions'


function SwiperCard() {

	const action = useActions()
	const cardData = useAppSelector(state => state.cards.cardState)
	const currentIndex = useAppSelector(state => state.cards.currentSlide)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? cardData.length - 1 : currentIndex - 1
		action.currentSlide(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === cardData.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		action.currentSlide(newIndex)
	}

	const goToSlide = (slideIndex: number) => {
		action.currentSlide(slideIndex)
	}



	return (
		<div className={s.container}>
			<div className={s.slider}>
				<Card card={cardData[currentIndex]} />
			</div>
			<div>
				<div className={s.leftArrow}>
					<IoIosArrowBack onClick={prevSlide} size={30} />
				</div>
				<div className={s.rightArrow}>
					<IoIosArrowForward onClick={nextSlide} size={30} />
				</div>
			</div>
			<div className={s.notKnow}>
				{cardData.map((slide, slideIndex) => (
					<div key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
				))}
			</div>
			
		</div>
	)
}

export default SwiperCard
