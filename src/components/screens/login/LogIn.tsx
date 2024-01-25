import Layout from 'components/layouts/layout/Layout'
import InputData from 'components/ui/inputData/InputData'
import OrangeBtn from 'components/ui/orangeBtn/OrangeBtn'
import { UseAuth } from 'hooks/useAuth'

import s from './Login.module.scss'

const SignUp = () => {
	const { errors, handleSubmit, onSubmit, register, setType, error } = UseAuth()

	const handleTypeChange = (newType: string) => {
		setType(newType)		
	}


	return (
		<Layout>
			<div className={s.container}>
				<h1>Log In</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={s.inputsCont}>
						<InputData
							error={errors?.username?.message}
							name='username'
							register={register}
							options={{
								required: 'Email is required',
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'Incorrect email format'
								}
							}}
							type='text'
							placeholder='Enter email'
						/>
						<InputData
							error={errors?.password?.message}
							name='password'
							register={register}
							options={{
								required: 'Password is required',
								minLength: {
									value: 5,
									message: 'Minimum 5 characters'
								}
							}}
							type='password'
							placeholder='Enter password'
						/>
					</div>
					{error && 
						<span className='errorData' >
							{error}
						</span>
					}
					<OrangeBtn
						text={'LogIn'}
						type={'submit'}
						fontSize={'18px'}
						pInline={'20px'}
						padding={'10px'}
						width={'100%'}
						onClick={() => handleTypeChange('login')}
					/>
				</form>
			</div>
		</Layout>
	)
}

export default SignUp

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDAmYLH50K5v2kBZ0XMx46ujT7Wt4BVMyw",
//   authDomain: "cryptoapp-13cd7.firebaseapp.com",
//   projectId: "cryptoapp-13cd7",
//   storageBucket: "cryptoapp-13cd7.appspot.com",
//   messagingSenderId: "847039650325",
//   appId: "1:847039650325:web:f6950aef926b28cc618c1c",
//   measurementId: "G-CNWHT5EYHQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
