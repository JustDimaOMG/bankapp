
import s from './InputGoal.module.scss'

interface InputProps {
	register: any
	name: string
	options: {
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
	error: string | undefined
	placeholder: string
}

const InputGoal = ({ register, name, options, error, ...rest }:InputProps) => {
  return (
    <div className={s.container}>
    <input
      {...register(name, options)}
      type='text'
      {...rest}
      className={s.input}
    />
    {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default InputGoal