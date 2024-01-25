import ToggleMode from 'components/ui/toggleMode/ToggleMode'

import s from './Header.module.scss'
import { useSelector } from 'react-redux'
import AccountBlock from 'components/layouts/layoutDashboard/topPanel/accountBlock/AccountBlock'

const UserNavBar = () => {

	const isAuth = useSelector(state => state.auth.userState.isAuth)

	return (
		<>
			<div className={s.navBarCont}>
				<div className={s.mainBar}>
					<div className={s.logo}>
						<a href='/'>
							<img src='/src/assets/photo/logo.png' />
							<h2>NeonNex</h2>
						</a>
					</div>
					<div className={s.navLinks}>
						<ul>
							<li>Buy currency</li>
							<li>NFT</li>
							<li>Web3</li>
							<li>News</li>
						</ul>
					</div>
				</div>
				{isAuth ? 
					<div className={s.profileBlock}>
						<AccountBlock/>
					</div>
				: 
					<div className={s.rightNav}>
					<div className={s.blockAuth}>
						<a href='/login'>Log In</a>
						<a href='/signup'>Sign Up</a>
					</div>
					<ToggleMode />
					</div>  
				}

			</div>
		</>
	)
}

export default UserNavBar
