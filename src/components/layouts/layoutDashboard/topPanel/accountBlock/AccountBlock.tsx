import ToggleMode from 'components/ui/toggleMode/ToggleMode'
import { useAppSelector } from 'hooks/useActions'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { CiMail } from 'react-icons/ci'
import { IoIosNotifications } from 'react-icons/io'

import s from './AccountBlock.module.scss'
import ProfilePopUp from './profilePopUp/ProfilePopUp'

const AccountBlock = () => {
	const user = useAppSelector(state => state.auth.userState)

	const { isShow, ref, setIsShow } = useOnClickOutside({
		isInitialValue: false
	})

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
							<div className={s.profilePopUp}>
								<ProfilePopUp />
							</div>
						)}
					</div>
					<div className={s.fullName}>
						<span>{user.firstName}</span>
						<span>{user.lastName}</span>
					</div>
				<ToggleMode />
			</div>
		</div>
	)
}

export default AccountBlock
