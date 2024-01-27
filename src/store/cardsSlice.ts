import { createSlice } from '@reduxjs/toolkit'
import { ICard } from 'interfaces/ICard'


interface ICardsState {
  cardState: ICard[] ,
  currentSlide: number
}
const initialState:ICardsState = {
  cardState: [],
  currentSlide: 0
}

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
    enterCards(state, action){
      state.cardState = action.payload
      
    },
    removeCards(state){
      state.cardState = []
    },
    currentSlide(state, action){
      state.currentSlide = action.payload
    }
	}
})

export const { enterCards, removeCards,currentSlide } = cardsSlice.actions

export default cardsSlice.reducer

