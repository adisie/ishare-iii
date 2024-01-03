import {configureStore} from '@reduxjs/toolkit'

// reducers
import homeReducer from '../features/home/homeSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        user: userReducer,
    }
})