import { useMutation } from '@tanstack/react-query'
import { useActions } from 'hooks/useActions'
import { ILogUser } from 'interfaces/IUser'
import { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UsersService } from 'services/Users.service'

type Inputs = {
	username: string
	password: string
}

export const UseAuth = () => {
	const actions = useActions()
	const [type, setType] = useState<string>()
	const isAuth = useSelector(state => state.auth.userState.isAuth)
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Inputs>({
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
				console.log(data)
			} else {
				actions.login({firstName: `${data.firstName}` || '', lastName: `${data.lastName}` || '', img: `${data.img}` || '/src/assets/photo/guessProfile.svg' })
				navigate('/dashboard/overview')
				
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


	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			onSubmit,
			isPending,
			errors
		}),
		[errors, isPending]
	)
}
