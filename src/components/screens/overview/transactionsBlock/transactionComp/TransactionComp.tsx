
import { ITransaction } from 'interfaces/ITransaction'
import s from './TransactionComp.module.scss'
import { IconsTrans } from 'data/IconsTrans.data'

interface ITransactionComp {
  trans:ITransaction
}

const TransactionComp = (data:ITransactionComp) => {

  const truncatedReceiver =
    data.trans.receiver.length > 10
      ? `${data.trans.receiver.slice(0, 10)}...`
      : data.trans.receiver;

  return (
    <div className={s.container}>
      <div className={s.receiver}>
        {IconsTrans.map(icon => 
          (icon.name === data.trans.type && 
            <img src={icon.icon} alt={icon.name} key={icon.name}/>
            )
        )}
        {truncatedReceiver}
      </div>
      <div className={s.type}>
        {data.trans.type}
      </div>
      <div className={s.date}>
        {data.trans.date}
      </div>
      <div className={s.amount}>
        ${data.trans.amount}
      </div>
    </div>
  )
}

export default TransactionComp