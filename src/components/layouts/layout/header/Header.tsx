import { MdLightMode } from 'react-icons/md'
import { MdNightlightRound } from 'react-icons/md'

import s from './Header.module.scss'
import { useState } from 'react'


const UserNavBar = () => {

  const [darkMode, setDarkMode] = useState(false)

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
				<div className={s.rightNav}>
					<div className={s.blockAuth}>
						<a href='/login'>Log In</a>
						<a href='/signup'>Sign Up</a>
					</div>
          <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdNightlightRound className={s.iconMoon} /> : <MdLightMode className={s.iconSun} />}
          </button>  
				</div>
			</div>
		</>
	)
}

export default UserNavBar
