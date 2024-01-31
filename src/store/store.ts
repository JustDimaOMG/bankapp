import { configureStore } from "@reduxjs/toolkit";

import authReducer from './authSlice'
import themeReducer from './themeSlice'
import cardsReducer from './cardsSlice'
import goalsReducer from './goalsSlice'
import transactionsReducer from './transactionsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    cards: cardsReducer,
    goals: goalsReducer,
    transactions: transactionsReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch