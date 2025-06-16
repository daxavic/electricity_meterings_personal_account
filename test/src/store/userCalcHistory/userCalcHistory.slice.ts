import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import type { CalcHistory, RequestStatus } from '../../types'
import type { RootState } from '../store'
import { getRandomInt } from '../../utils'

type CalcHistoryState = {
    status: RequestStatus
}

const calcHistoryState: CalcHistoryState = {
    status: 'idle'
}

const calcHistoryAdapter = createEntityAdapter<CalcHistory>({
    sortComparer: (a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1
})

const initialState = calcHistoryAdapter.getInitialState(
    calcHistoryState,
    [
        { id: '1', date: '2025-01-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '3', date: '2025-03-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '2', date: '2025-02-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '4', date: '2025-04-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '5', date: '2025-05-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '6', date: '2025-06-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '7', date: '2025-07-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '8', date: '2025-08-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '9', date: '2025-09-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '10', date: '2025-10-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '11', date: '2025-11-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
        { id: '12', date: '2025-12-01', moneyValue: getRandomInt(1000, 10000), meterValue: 0 },
    ]
)

const slice = createSlice({
    name: 'calcHistory',
    initialState,
    reducers: {},
})

export const userCalcHistoryReducer = slice.reducer

export const userCalcHistorySelectors = calcHistoryAdapter.getSelectors<RootState>(state => state.userCalcHistory)