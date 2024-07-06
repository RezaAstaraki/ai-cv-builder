import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'loginModal',
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
export default modalSlice.reducer
export const { open, close } = modalSlice.actions