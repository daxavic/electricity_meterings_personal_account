import { FC} from "react"
import css from './User.module.css'
import { UserInfo, UserDebt, UserMeter, UserHistory } from '../../components'
import { selectUser, selectUserCalcHistory, useAppSelector } from "../../store"

export const User: FC = () => {
    const user = useAppSelector(selectUser)
    const userCalcHistory = useAppSelector(selectUserCalcHistory)

    if (!user) return null

    return (
        <div className={css.container}>
            <div className={css.content}>
                {/* Ваши данные */}
                <UserInfo
                    name={user.name}
                    phone={user.phone}
                    email={user.email}
                    address={user.address}
                />
                {/* Счётчики */}
                <UserMeter meters={user.meters} />
                {/* Текущая задолжность */}
                <UserDebt debt={user.dept} />
                {/* История */}
                <UserHistory history={userCalcHistory} />
            </div>
        </div>
    )
}
