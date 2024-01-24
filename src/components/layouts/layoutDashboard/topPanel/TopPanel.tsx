import s from './TopPanel.module.scss'
import AccountBlock from './accountBlock/AccountBlock'

const TopPanel = (props: Props) => {
	return (
    <div className={s.container}>
      <div className={s.infoBlock}>
        <h1>
          Weekly sumup
        </h1>
        <span>
          Get summary of your weekly online transactions here.
        </span>
      </div>
      <div className={s.profileBlock}>
        <AccountBlock/>
      </div>

    </div>
  )
}

export default TopPanel
