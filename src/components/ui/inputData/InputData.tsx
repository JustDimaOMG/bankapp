import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import s from './InputData.module.scss'

interface InputProps {
	register?: any
	name?: string
	options?: {
		required: string
		minLength?: {
			value: number
			message: string
		}
		pattern?: {
			value: RegExp
			message: string
		}
	}
	type: string
	error?: string | undefined
}

const InputData: React.FC<
	InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ register, name, options, error, type, ...rest }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			{name === 'username' ? (
				<div className={s.emailCont}>
					<input
						{...register(name, options)}
						type={type}
						{...rest}
						className={s.inputEmail}
						autoComplete='email'
					/>
					{error && <div className='error'>{error}</div>}
				</div>
			) : name === 'password' ? (
				<div className={s.passCont}>
					<div className={s.inputContainer}>
						<input
            autoComplete='off'
							{...register(name, options)}
							type={isShow ? 'text' : type}
							{...rest}
							className={s.inputPass}
						/>
						<button onClick={() => setIsShow(!isShow)} type='button'>
							{isShow ? (
								<FaEye className={s.iconEye} />
							) : (
								<FaEyeSlash className={s.iconEye} />
							)}
						</button>
					</div>
					{error && <div className='error'>{error}</div>}
				</div>
			) : (
				<div>
					<div className={s.justCont}>
						<input type={type} {...rest} className={s.inputJust} />
					</div>
				</div>
			)}
		</>
	)
}

export default InputData
