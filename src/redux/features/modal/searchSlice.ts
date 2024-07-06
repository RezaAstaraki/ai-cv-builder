import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        openSearch: (state) => {
            state.isOpen=true
        },
        closeSearch: (state) => {
            state.isOpen=false
        },
        
    }
})

export const {openSearch,closeSearch}=searchSlice.actions

export default searchSlice.reducer