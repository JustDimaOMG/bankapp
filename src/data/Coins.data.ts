

type coin = {
  name:string,
  tiket: string,
  image:string,
  price:number
}[]


export const Coins:coin = [
  {
    name: 'BTC',
    tiket: 'bitcoin',
    image: `/src/assets/icons/`,
    price: 42304
  },
  {
    name: 'ETH',
    tiket: 'ethereum',
    image: `/src/assets/icons/`,
    price: 2608
  },
  {
    name: 'XRP',
    tiket: 'ripple',
    image: `/src/assets/icons/`,
    price: 43
  },
  {
    name: 'SOL',
    tiket: 'solana',
    image: `/src/assets/icons/`,
    price: 116

  },
  {
    name: 'BNB',
    tiket: 'BNB',
    image: `/src/assets/icons/`,
    price: 313
  }

]
