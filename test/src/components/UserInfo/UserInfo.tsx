import { FC } from "react";
import { Text } from '@consta/uikit/Text'
import type { UserInfoProps } from './types'
import css from './UserInfo.module.css'

export const UserInfo: FC<UserInfoProps> = (props) => {
    const { name, phone, email, address } = props

    return (
        <div className={css.userInfo}>
            <div className={css.title}>
                <Text size="l" view="primary">Ваши данные</Text>
            </div>
            <div className={css.info}>
                <Text size="m" view="secondary">Ф.И.О</Text>
                <Text size="m" view="primary">{name}</Text>
            </div>
            <div className={css.info}>
                <Text size="m" view="secondary">Телефон</Text>
                <Text size="m" view="primary">{phone}</Text>
            </div>
            <div className={css.info}>
                <Text size="m" view="secondary">Электронная почта</Text>
                <Text size="m" view="primary">{email}</Text>
            </div>
            <div className={css.info}>
                <Text size="m" view="secondary">Адрес</Text>
                <Text size="m" view="primary">{address}</Text>
            </div>
        </div>
    )
}