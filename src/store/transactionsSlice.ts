import { createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "interfaces/ITransaction";

interface ITransactionsState {
  transactionState: ITransaction[]
}

const initialState:ITransactionsState = {
  transactionState: []
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {

    enterTransactions(state, action){
      state.transactionState = action.payload
    }
  }
})

export const {enterTransactions} = transactionsSlice.actions

export default transactionsSlice.reducer