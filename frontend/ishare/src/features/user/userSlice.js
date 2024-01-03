import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    LOGINSIGNUP_DIRECTION: 'LOGIN',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSignupDirectionHandler: (state,action) => {
            state.LOGINSIGNUP_DIRECTION = action.payload
        }
    }
})

export const selectLoginSignupDirection = state => state.user.LOGINSIGNUP_DIRECTION

// actions
export const {
    loginSignupDirectionHandler,
} = userSlice.actions

export default userSlice.reducer