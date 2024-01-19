import OrangeBtn from 'components/ui/orangeBtn/OrangeBtn'
import { users } from 'data/usersData/Users.data'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Home.module.scss'
import CoinsStat from './coinsStat/CoinsStat'
import HalvingCounter from './halvingCounter/HalvingCounter'
import LayoutAuth from 'components/layouts/layout/Layout'

type Inputs = {
	username: string
}

const Home: FC = () => {
	const [allUsers, setAllUsers] = useState<number>(0)

	const targetDate = new Date('2024-04-01T00:00:00');

	useEffect(() => {
		setAllUsers(users.length)
	}, [allUsers])

	const {
		register,
		handleSubmit,
		reset
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = data => {
		reset()

		console.log(data)
	}

	return (
		<LayoutAuth>


			<div className={styles.homeContainer}>
				<div>
					<h1 className={styles.mainText}>
						<span>{allUsers}</span> <br />
						пользователей
						<br />
						нам доверяет
					</h1>

					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							autoComplete='off'
							type='email'
							className={styles.enterUsername}
							placeholder='Enter your email'
							{...register('username', {
								required: 'Email is required',
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'Incorrect email format'
								}
							})}
						/>

						<OrangeBtn text={'Start'} type={'submit'} />
					</form>
				</div>

				<div>
					<CoinsStat />
					<HalvingCounter targetDate={targetDate} />
				</div>
			</div>




		</LayoutAuth>	)
}

export default Home
