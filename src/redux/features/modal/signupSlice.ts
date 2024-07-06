import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false,
}

export const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen =false
    },
  },
})

// Action creators are generated for each case reducer function
export const { open, close } = signUpSlice.actions

export default signUpSlice.reducer