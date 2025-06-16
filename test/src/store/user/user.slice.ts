import { createSlice } from "@reduxjs/toolkit";
import type { User, RequestStatus, Nullable } from '../../types'

type UserState = {
    user: Nullable<User> 
    status: RequestStatus
}

const initialState: UserState = {
    user: {
        id: '1',
        name: 'Иванов Иван Иванович',
        phone: '+7 (987) 654-32-10',
        email: 'ivanov@mail.ru',
        address: 'г. Москва, ул. Ленина, д. 70, кв. 1',
        dept: 3762,
        meters: [
            { id: '1', name: '№34-14534-098', value: 23423.965 },
        ]
    },
    status: 'idle'
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const userReducer = slice.reducer
