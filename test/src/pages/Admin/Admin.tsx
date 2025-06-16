import { FC } from "react"
import css from './Admin.module.css'
import { AdminHistory } from "../../components"
import type { AdminHistoryItem } from "../../types"

const history: AdminHistoryItem[] = [
    { id: '1', date: '2003-01-01', payer: 'Гаврилов Алексей Дмитриевич', address: 'город Можайск, шоссе Гагарина, 57', moneyValue: 564 * 5, meterValue: 564 },
    { id: '2', date: '2003-02-01', payer: 'Гаврилов Алексей Дмитриевич', address: 'город Можайск, шоссе Гагарина, 57', moneyValue: 1056 * 5, meterValue: 1056 },
    { id: '3', date: '2003-03-01', payer: 'Гаврилов Алексей Дмитриевич', address: 'город Можайск, шоссе Гагарина, 57', moneyValue: 1789 * 5, meterValue: 1789 },

    { id: '4', date: '2003-01-01', payer: 'Петров Петр Петрович', address: 'город Шаховская, ул. Бухарестская, 51', moneyValue: 195 * 5, meterValue: 195 },
    { id: '5', date: '2003-02-01', payer: 'Петров Петр Петрович', address: 'город Шаховская, ул. Бухарестская, 51', moneyValue: 697 * 5, meterValue: 697 },
    { id: '6', date: '2003-03-01', payer: 'Петров Петр Петрович', address: 'город Шаховская, ул. Бухарестская, 51', moneyValue: 1333 * 5, meterValue: 1333 },

    { id: '7', date: '2003-01-01', payer: 'Грачева Василиса Платоновна', address: 'город Луховицы, пр. Домодедовская, 66', moneyValue: 259 * 5, meterValue: 259 },
    { id: '8', date: '2003-02-01', payer: 'Грачева Василиса Платоновна', address: 'город Луховицы, пр. Домодедовская, 66', moneyValue: 788 * 5, meterValue: 788 },
    { id: '9', date: '2003-03-01', payer: 'Грачева Василиса Платоновна', address: 'город Луховицы, пр. Домодедовская, 66', moneyValue: 2654 * 5, meterValue: 2654 },

    { id: '10', date: '2003-01-01', payer: 'Сергеев Андрей Александрович', address: 'город Дорохово, ул. Ломоносова, 07', moneyValue: 487 * 5, meterValue: 487 },
    { id: '11', date: '2003-02-01', payer: 'Сергеев Андрей Александрович', address: 'город Дорохово, ул. Ломоносова, 07', moneyValue: 654 * 5, meterValue: 654 },
    { id: '12', date: '2003-03-01', payer: 'Сергеев Андрей Александрович', address: 'город Дорохово, ул. Ломоносова, 07', moneyValue: 1234 * 5, meterValue: 1234 },

    { id: '13', date: '2003-01-01', payer: 'Матвеева Наталья Дамировна', address: 'город Истра, въезд Косиора, 29', moneyValue: 7894 * 5, meterValue: 7894 },
    { id: '14', date: '2003-02-01', payer: 'Матвеева Наталья Дамировна', address: 'город Истра, въезд Косиора, 29', moneyValue: 8347 * 5, meterValue: 8347 },
    { id: '15', date: '2003-03-01', payer: 'Матвеева Наталья Дамировна', address: 'город Истра, въезд Косиора, 29', moneyValue: 10983 * 5, meterValue: 10983 },
]

export const Admin: FC = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <AdminHistory history={history} />
            </div>
        </div>
    )
}