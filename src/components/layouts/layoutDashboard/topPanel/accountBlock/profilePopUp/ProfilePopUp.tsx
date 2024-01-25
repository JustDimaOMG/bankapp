
import { useActions } from 'hooks/useActions'
import s from './ProfilePopUp.module.scss'
import { useNavigate } from 'react-router-dom'

const ProfilePopUp = () => {

  const actions = useActions()
  const navigate = useNavigate()

  const handleClickLogout = () =>{
    actions.logout()
    navigate('/')
  }
  const handleClickDashboard = () => {
    navigate('/dashboard/overview')
  }

  return (
    <div className={s.container}>
      <ul>
        <li>
          <button onClick={() => handleClickDashboard()}>
            Dashboard
          </button>
        </li>
        <li>
          <button>
            Profile
          </button>
        </li>
        <li>
          <button>
            Settings
          </button>
        </li>
        <li>
          <button onClick={() => handleClickLogout() }>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ProfilePopUp