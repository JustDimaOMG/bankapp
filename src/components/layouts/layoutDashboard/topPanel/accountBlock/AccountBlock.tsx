
import { CiMail } from 'react-icons/ci'
import s from './AccountBlock.module.scss'
import { IoIosNotifications } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ProfilePopUp from './profilePopUp/ProfilePopUp'

const AccountBlock = () => {

  const user = useSelector(state => state.auth.userState)
  
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={s.container}>
      <div className={s.notes}>
        <button>
          <CiMail className={s.icon}/>
        </button>
        <button>
          <IoIosNotifications className={s.icon}/>
        </button>
      </div>
      <div className={s.profile}>
        <button onClick={() => setIsVisible(!isVisible)}>
          <img src={user.img} alt='photo profile'/>
        </button>
        {isVisible && 
          <div className={s.profilePopUp}>
            <ProfilePopUp/>
          </div>
        }
        <div className={s.fullName}>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
      </div>
    </div>
  )
}

export default AccountBlock