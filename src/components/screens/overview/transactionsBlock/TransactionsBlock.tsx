import { useAppSelector } from 'hooks/useActions'

import s from './Transactions.module.scss'
import TransactionComp from './transactionComp/TransactionComp'
import { useTransactionsBlock } from './useTransactionsBlock'

const TransactionsBlock = () => {
	useTransactionsBlock()

	const transactions = useAppSelector(
		state => state.transactions.transactionState
	)

	return (
		<div className={s.container}>
			<h3 className='titleBlock'>Transaction history</h3>
			<div className={s.inner}>
				<div className={s.topic}>
					<span>Reciever</span>
					<span>Type</span>
					<span>Date</span>
					<span>Amount</span>
				</div>
				{transactions.length > 0 ? (
					<div className={s.historyList}>
						<ul>
							{transactions.map(
								(trans, index) =>
									index <7 && (
										<li key={index}>
											<TransactionComp trans={trans} />
										</li>
									)
							)}
						</ul>
					</div>
				) : (
					<div>You don't have any transactions yet</div>
				)}
			</div>
		</div>
	)
}

export default TransactionsBlock
