import { createSlice } from "@reduxjs/toolkit";

export interface AddProperty{
    isOpen: boolean;
}

const initialState:AddProperty = {
    isOpen:false,
}

export const addPropertySlice = createSlice(
    {
        name: 'addProperty',
        initialState,
        reducers: {
            'openAddProperty': (state) => {
                state.isOpen=true
            },
            'closeAddProperty': (state) => {
                state.isOpen=false
            }
        }
    }
)

export default addPropertySlice.reducer
export const  {closeAddProperty,openAddProperty} = addPropertySlice.actions