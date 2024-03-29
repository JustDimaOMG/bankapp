import Layout from 'components/layouts/layout/Layout'
import OrangeBtn from 'components/ui/formBtn/FormBtn'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersService } from 'services/Users.service'

import styles from './Home.module.scss'
import CoinsStat from './coinsStat/CoinsStat'
import HalvingCounter from './halvingCounter/HalvingCounter'

const Home: FC = () => {
	const [allUsers, setAllUsers] = useState<number>(0)
	const [email, setEmail] = useState<string>('')
	const navigate = useNavigate()
	const targetDate = new Date('2024-04-01T00:00:00')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		navigate(`/signup?email=${email}`)
	}

	useEffect(() => {
		UsersService.GetAllUsers()
			.then(count => {
				setAllUsers(count)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<Layout>
			<div className={styles.homeContainer}>
				<div>
					<h1 className={styles.mainText}>
						<span>{allUsers}</span> <br />
						пользователей <br />
						нам доверяет
					</h1>
					<form onSubmit={handleFormSubmit}>
						<input
							className={styles.input}
							type='text'
							placeholder='Enter email'
							value={email}
							onChange={handleInputChange}
						/>
						<OrangeBtn
							text={'Start'}
							type={'submit'}
							fontSize={'18px'}
							pInline={'60px'}
							padding={'15px'}
						/>
					</form>
				</div>
				<div>
					<CoinsStat />
					<HalvingCounter targetDate={targetDate} />
				</div>
			</div>
		</Layout>
	)
}

export default Home
