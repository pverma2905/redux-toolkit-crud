import { configureStore } from '@reduxjs/toolkit'
import userDetailSlice from './feature/userDetailSlice'

export const store = configureStore({
    reducer: {
        app: userDetailSlice
    },
})