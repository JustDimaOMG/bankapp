import { createSlice } from '@reduxjs/toolkit'
import { IGoal } from 'interfaces/IGoal'


interface IGoalsState {
  goalState: IGoal[] 
}
const initialState:IGoalsState = {
  goalState: [],
}

const goalsSlice = createSlice({
	name: 'goals',
	initialState,
	reducers: {
    enterGoals(state, action){
      state.goalState = action.payload      
    },
	}
})

export const { enterGoals} = goalsSlice.actions

export default goalsSlice.reducer

