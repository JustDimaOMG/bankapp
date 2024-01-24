
import { useActions } from 'hooks/useActions'
import s from './ProfilePopUp.module.scss'

const ProfilePopUp = () => {

  const actions = useActions()

  const handleClick = () =>{
    actions.logout()
    
  }

  return (
    <div className={s.container}>
      <ul>
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
          <button onClick={() => handleClick() }>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ProfilePopUp