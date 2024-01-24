import { useNavigate } from "react-router-dom"
import { navList } from "./NavList.data"

import s from './NavList.module.scss'
import { GoGraph } from "react-icons/go";
import { IoDocumentOutline, IoList, IoSettingsOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
const NavList = () => {

  const navigate = useNavigate()

  const iconComponents: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    GoGraph,
    IoList,
    CiCreditCard1,
    IoDocumentOutline,
    FiAward,
    IoSettingsOutline,

  };

  return (
    <div className={s.navList}>
      <div className={s.container}>
        <div className={s.logo}>
          <a href='/dashboard'>
            <img src='/src/assets/photo/logo.png' />
            <h2>NeonNex</h2>
          </a>
        </div>
        <nav >
          <ul>
            {navList.map(nav => {
              const IconComponent = iconComponents[nav.icon]; 
              return (
              <li>
                <button onClick={() => navigate(`/dashboard${nav.path}`)}>
                  {IconComponent && <IconComponent fontSize={'22px'}/>} 
                  {nav.title}
                </button>
              </li>
            )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavList