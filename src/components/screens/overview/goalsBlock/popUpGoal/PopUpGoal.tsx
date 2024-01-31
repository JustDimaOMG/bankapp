import FormBtn from 'components/ui/formBtn/FormBtn'
import { icons } from 'data/icons.data'
import { format } from 'date-fns'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import s from './PopUpGoal.module.scss'
import IconSelect from './iconSelect/IconSelect'
import InputGoal from './inputGoal/InputGoal'
import { usePopUpGoal } from './usePopUpGoal'

export type TInputs = {
	title: string
	amount: string
	date: string
	icon: string
}

interface Props {
	setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUpGoal = (props: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors }
	} = useForm<TInputs>({
		mode: 'onSubmit'
	})
	const [startDate, setStartDate] = useState(new Date(Date.now()))
	const [selectedIcon, setSelectedIcon] = useState<string>('')
	const mutate = usePopUpGoal()

	const onSubmit: SubmitHandler<TInputs> = async userData => {
		if (userData.date) {
			const formattedDate = format(new Date(userData.date), 'MM/dd/yy')
			userData.date = formattedDate
			mutate(userData)
			props.setIsShow(false)
			reset()
		}
	}

	return (
		<div className={s.container}>
			<div className={s.inner}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<InputGoal
						register={register}
						name='title'
						options={{
							required: 'Field is required'
						}}
						error={errors?.title?.message}
						placeholder='Enter title'
					/>
					<InputGoal
						register={register}
						name='amount'
						options={{
							required: 'Field is required',
							pattern: {
								value: /^\d+$/,
								message: 'Only numbers are allowed'
							}
						}}
						error={errors?.amount?.message}
						placeholder='Enter amount'
					/>

					<Controller
						control={control}
						name='date'
						render={({
							field
						}: {
							field: { value: string; onChange: (date: string) => void }
						}) => {
							return (
								<ReactDatePicker
									className={s.datePicker}
									showIcon
									selected={startDate}
									isClearable
									onChange={(date: Date) => {
										setStartDate(date)
										field.onChange(format(date, 'MM/dd/yy'))
									}}
									placeholderText='Select date'
								/>
							)
						}}
						defaultValue={format(startDate, 'MM/dd/yy')} 

					/>

					<IconSelect
						icons={icons}
						selectedIcon={selectedIcon}
						onSelect={(id: string) => {
							setValue('icon', id)
							setSelectedIcon(id)
						}}
					/>

					<FormBtn
						text={'Add'}
						type={'submit'}
						fontSize={'18px'}
						pInline={'20px'}
						padding={'10px'}
						width={'100%'}
					/>
				</form>
			</div>
		</div>
	)
}

export default PopUpGoal
