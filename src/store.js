import { configureStore } from '@reduxjs/toolkit'
import authReducer from './components/slice/auth'
import messageReducer from './components/slice/message'

const reducer = {
    auth: authReducer,
    message: messageReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;