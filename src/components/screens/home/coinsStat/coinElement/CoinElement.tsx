import { useCoinElement } from "./useCoinElement"

type Props = {
	image: string
	name: string
	tiket: string,
  price:number
}

const CoinElement = (props: Props) => {

	let coin: string

	const info = useCoinElement(props.name)

  if (typeof info.data?.data?.price === 'string' && !isNaN(info.data?.data?.price)) {
    coin = parseFloat(info.data?.data?.price).toFixed(2);
  }
	

	return (
		<div className='flex items-center w-full'>
			<img className='w-[30px] mr-3' src={`${props.image}`} alt='coin' />
			<span className="uppercase font-medium text-[18px] mr-1">{props.name}</span>
			<span className="capitalize opacity-45 text-[14px]">{props.tiket}</span>
      <span className="w-full flex justify-end font-semibold">{coin}</span>
		</div>
	)
}

export default CoinElement
