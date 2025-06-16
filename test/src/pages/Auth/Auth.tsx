import { FC, useState } from "react"
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import css from './Auth.module.css'

export const Auth: FC = () => {
    const [name, setName] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const login = () => {
        setLoading(true)
        
        alert('login')

        setLoading(false)
    }

    return (
        <div className={css.page}>
            <div className={css.fieldGroup}>
                <Text size="l" view="secondary">Добро пожаловать!</Text>
                <TextField form="brick" placeholder="Email или номер телефона" value={name} size="m" withClearButton={true} onChange={setName} />
                <TextField form="brick" placeholder="Пароль" type="password" value={password} size="m" withClearButton={true} onChange={setPassword} />
                <Button label="Войти" form="brick" loading={loading} onClick={login} />
            </div>
        </div>
    )
}