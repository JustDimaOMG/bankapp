import s from './Footer.module.scss'
import CommunityIcons from './communityIcons/CommunityIcons'

const Footer = () => {
	return (
		<div className={s.footer}>
			<div>
				<ul className={s.footerUl}>
					<li className={s.footerLi}>
              Community
						<div>
							<CommunityIcons />
						</div>
					</li>
					<li className={s.footerLi}>
						About us
					</li>
					<li className={s.footerLi}>
						Products
					</li>
					<li className={s.footerLi}>
						Services
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
