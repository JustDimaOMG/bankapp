import  { FC, ReactNode } from 'react'
import s from './LayoutDashboard.module.scss'
import NavList from './navList/NavList'

type LayoutDashboardProps = {
  children: ReactNode
}

const LayoutDashboard:FC<LayoutDashboardProps> = ({children}) => {
  return (
    <div className={s.container}>
      <div className={s.sideBlock}>
        <NavList/>
      </div>

      
    </div>
  )
}

export default LayoutDashboard


