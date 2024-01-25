import { CiMail } from 'react-icons/ci';
import s from './AccountBlock.module.scss';
import { IoIosNotifications } from 'react-icons/io';
import { useSelector } from 'react-redux';
import ProfilePopUp from './profilePopUp/ProfilePopUp';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import ToggleMode from 'components/ui/toggleMode/ToggleMode';

const AccountBlock = () => {
  const user = useSelector((state) => state.auth.userState);


	const { isShow, ref, setIsShow } = useOnClickOutside({isInitialValue: false})



  return (
    <div className={s.container}>
      <div className={s.notes}>
        <button>
          <CiMail className={s.icon} />
        </button>
        <button>
          <IoIosNotifications className={s.icon} />
        </button>
      </div>
      <div className={s.profile}>
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <button onClick={() => setIsShow(!isShow)}>
            <img src={user.img} alt='photo profile' />
          </button>
          {isShow && (
            <div  className={s.profilePopUp}>
              <ProfilePopUp />
            </div>
          )}
        </div>

        <div className={s.fullName}>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <ToggleMode/>
      </div>
    </div>
  );
};

export default AccountBlock;