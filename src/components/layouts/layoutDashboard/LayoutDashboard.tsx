import  { FC, ReactNode } from 'react'
import s from './LayoutDashboard.module.scss'
import NavList from './navList/NavList'
import TopPanel from './topPanel/TopPanel'

interface LayoutDashboardProps  {
  children: ReactNode
}

const LayoutDashboard:FC<LayoutDashboardProps> = ({children}) => {
  return (
    <div className={s.container}>
      <div className={s.sideBlock}>
        <NavList/>
      </div>
      <main>
        <div className={s.innerBlock}>
          <div className={s.upperBlock}>
            <TopPanel/>
          </div>
          <div className={s.lowerBlock}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default LayoutDashboard


