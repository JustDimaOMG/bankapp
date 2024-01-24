
import LayoutDashboard from 'components/layouts/layoutDashboard/LayoutDashboard'
import s from './Overview.module.scss'
import Cards from '../cards/Cards'
import CardsBlock from './cardsBlock/CardsBlock'


const Overview = () => {


  return (
    <LayoutDashboard>
      <div className={s.container}>
        <div className={s.leftSide}>
         <CardsBlock/>
        </div>
      </div>
    </LayoutDashboard>
  )
}

export default Overview