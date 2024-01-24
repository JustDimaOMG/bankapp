
export interface IUser{
  id: string,
  username: string,
  password:string,
  firstName: string,
  lastName: string
  img:string,
  // cards:[],
  // transactions:[],
  // goals:[],
}

export interface ILogUser {
  username: string,
  password: string
}

export interface IUpdUser {
  id: string,
  username?: string,
  password?:string,
  img?:string,
  cards?:{
    cardNumber: number,
    expiration: Date,
    cardName: string,
    cvc: number,
  },
  transactions?:{
    type:string,
    receiver: string,
    date: Date,
    amount: number,
  },
  goals?:{
    type:string,
    icon: string,
    amount: number,
    date:Date,
  },
}