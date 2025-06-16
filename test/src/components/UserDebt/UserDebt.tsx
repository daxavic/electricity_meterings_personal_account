import { FC } from "react";
import { Text } from '@consta/uikit/Text'
import { Button } from '@consta/uikit/Button'
import type { UserDebtProps } from './types'
import css from './UserDebt.module.css'

export const UserDebt: FC<UserDebtProps> = (props) => {
    const { debt } = props
    const localeDebt = debt.toLocaleString(
        'ru-RU',
        { 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        },
    )

    const generateReceipt = () => {
        return
    }

    return (
        <div className={css.userDebt}>
            <div className={css.title}>
                <Text size="l" view="primary">Текущая задолжность</Text>
            </div>
            <div className={css.content}>
                <Text font="mono" size="l" lineHeight="xs" view="primary" weight="light">{localeDebt} ₽</Text>
                <Button label="Оплатить" size="s" onClick={generateReceipt} />
            </div>
        </div>
    )
}