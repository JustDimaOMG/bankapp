import { createSlice } from '@reduxjs/toolkit'


interface IThemeState {
  themeState: {
    darkMode: boolean;

  };
}


const localValue = localStorage.getItem('theme')


const initialState: IThemeState = {
  themeState: {
    darkMode:localValue ? JSON.parse(localValue) : false,
  },
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
    toggleMode(state) {
      state.themeState.darkMode = !state.themeState.darkMode
      localStorage.setItem('theme', `${state.themeState.darkMode}` );			

    },
	}
})

export const { toggleMode } = themeSlice.actions

export default themeSlice.reducer

