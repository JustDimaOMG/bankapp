import { useMutation } from '@tanstack/react-query'
import { useActions, useAppSelector } from 'hooks/useActions'
import { ILogUser } from 'interfaces/IUser'
import { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UsersService } from 'services/Users.service'

export type TInputs = {
	username: string
	password: string
}

export const UseAuth = () => {
	const actions = useActions()
	const [type, setType] = useState<string>()
	const isAuth = useAppSelector(state => state.auth.userState.isAuth)
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TInputs>({
		mode: 'onSubmit'
	})

	const { mutate, isPending } = useMutation({
		mutationFn: (userData: ILogUser) => {
			return type === 'signup'
				? UsersService.PostUser(userData)
				: UsersService.GetUser(userData)
		},
		onSuccess: data => {
			if (
				typeof data === 'string' &&
				(data.includes('already') || data.includes('exist') || data.includes('match')) 
			) {
				setError(data)
			} else {
				actions.login({firstName: `${data.firstName}` || '', lastName: `${data.lastName}` || '', img: `${data.img}` || '/src/assets/photo/guessProfile.svg' })				
			}
		},
		onError: error => {
			console.error(error)
		}
	})


	const onSubmit: SubmitHandler<ILogUser> = async userData => {
		mutate(userData)
		reset()
	}

	useEffect(() => {
		if (isAuth){
			navigate('/dashboard/overview')
		}
	},[isAuth])



	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			onSubmit,
			errors,
			error
		}),
		[errors, isPending]
	)
}
