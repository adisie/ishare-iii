import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    MAIN_DIRECTION: 'HOME',
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        mainDirectionHandler: (state,action) => {
            state.MAIN_DIRECTION = action.payload
        }
    }
})

export const selectMainDirection = state => state.home.MAIN_DIRECTION

// actions
export const {
    mainDirectionHandler,
} = homeSlice.actions

export default homeSlice.reducer