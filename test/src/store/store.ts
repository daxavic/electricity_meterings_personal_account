import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user'
import { userCalcHistoryReducer } from './userCalcHistory'

const rootReducer = combineReducers({
  user: userReducer,
  userCalcHistory: userCalcHistoryReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
