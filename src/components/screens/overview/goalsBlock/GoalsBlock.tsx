

import GoalComp from 'components/ui/goalComp/GoalComp'
import s from './GoalsBlock.module.scss'
import { IoAdd } from 'react-icons/io5'
import { useState } from 'react'
import { useGoalsBlock } from './useGoalsBlock'
import { useAppSelector } from 'hooks/useActions'

const GoalsBlock = () => {

	const [error, setError] = useState<string | null>(null)
	const goalsData = useAppSelector(state => state.goals.goalState) || []

  useGoalsBlock(setError)
  

  //сделать GoalComp слайдами чтобы 3 блока было видно только также посмотреть на аккаунтблок в хидере чтобы он нормальным был и в слчае 
  // дать ему паддинг справа

  return (
    <div className={s.container}>
      <div className={s.upperBlock}>
        <h3 className='titleBlock'>Goals</h3>
        <button>
          <IoAdd />
        </button>
      </div>
      <div className={s.lowerBlock}>
        {!error && goalsData.length > 0 ? (
          goalsData.map((goal, index) => (
            <GoalComp
              key={index}
              amount={goal.amount}
              date={goal.date}
              title={goal.title}
              icon={goal.icon}
              id={goal.id}
            />
          ))

        ) : <div>{error}</div> }
      </div>
    </div>
  )
}

export default GoalsBlock

