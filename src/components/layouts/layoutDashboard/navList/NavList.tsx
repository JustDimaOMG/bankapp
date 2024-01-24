import { CiCreditCard1 } from 'react-icons/ci'
import { FiAward } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import { IoDocumentOutline, IoList, IoSettingsOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import s from './NavList.module.scss'
import { navListData } from './navList.data'

const NavList = () => {
	const navigate = useNavigate()

	const iconComponents: Record<
		string,
		React.ComponentType<React.SVGProps<SVGSVGElement>>
	> = {
		GoGraph,
		IoList,
		CiCreditCard1,
		IoDocumentOutline,
		FiAward,
		IoSettingsOutline
	}

	return (
		<div className={s.navList}>
			<div className={s.container}>
				<div className={s.logo}>
					<a href='/dashboard/overview'>
						<img src='/src/assets/photo/logo.png' />
						<h2>NeonNex</h2>
					</a>
				</div>
				<nav>
					<ul>
						{navListData.map(nav => {
							const IconComponent = iconComponents[nav.icon]
              const isActive = `/dashboard${nav.path}` === location.pathname;

							return (
								<li key={nav.path} >
									<button onClick={() => navigate(`/dashboard${nav.path}` )} className={isActive ? s.btnActive : ''}>
										{IconComponent && <IconComponent fontSize={'22px'} />}
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
