export type Nullable<T> = T | null

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Счётчик
 */
export type Meter = {
    /**
     * ID счётчика
     */
    id: string
    /**
     * Наименование
     */
    name: string
    /**
     * Текущее значение
     */
    value: number
}

/**
 * Пользователь
 */
export type User = {
    /**
     * ID Пользователя
     */
    id: string
    /**
     * Ф.И.О
     */
    name: string
    /**
     * Телефон
     */
    phone: Nullable<string>
    /**
     * Email
     */
    email: Nullable<string>
    /**
     * Адрес
     */
    address: string
    /**
     * Текущая задолжность
     */
    dept: number
    /**
     * Текущая задолжность
     */
    meters: Meter[]
}

/**
 * История расчётов
 */
export type CalcHistory = {
    /**
     * ID записи
     */
    id: string,
    /**
     * Дата
     */
    date: string,
    /**
     * Кол-во денег
     */
    moneyValue: number,
        /**
     * Кол-во кВт/ч
     */
    meterValue: number,
}

/**
 * История расчётов
 */
export type AdminHistoryItem = {
    id: string
    payer: string
    address: string
    date: string
    moneyValue: number
    meterValue: number
}