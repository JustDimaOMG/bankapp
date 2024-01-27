
import React from 'react'
import s from './CardCalc.module.scss'
import { useAppSelector } from 'hooks/useActions'




const CardCalc = () => {

	const cardData = useAppSelector(state => state.cards.cardState) || []
	const currentIndex = useAppSelector(state => state.cards.currentSlide)
  

  return (
    <div className={s.container}>
      <div className={s.balance}>
        <span>$ {cardData[currentIndex].balance}</span>
        <span>Current balance</span>
      </div>
      <div className={s.income}>
        <span>$ {cardData[currentIndex].income}</span>
        <span>Income</span>
      </div>
      <div className={s.outcome}>
        <span>$ {cardData[currentIndex].outcome}</span>
        <span>Outcome</span>
      </div>
    </div>
  )
}

export default CardCalc