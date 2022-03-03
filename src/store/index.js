import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice/appSlice'
import ThunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware),
})
