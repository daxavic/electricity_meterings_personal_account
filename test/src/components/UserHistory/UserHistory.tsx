import { FC, useState } from "react"
import { Text } from '@consta/uikit/Text'
import css from './UserHistory.module.css'
import type { UserHistoryCalcProps } from './types'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

type View = 'meter' | 'money'

const VIEWS: View[] = ['meter', 'money']
const MONEY_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}
const METER_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
    minimumIntegerDigits: 6,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
}

const getItemLabel = (view: View): string => {
    return view === 'money' ? 'Начисления' : 'Показания'
}

export const UserHistory: FC<UserHistoryCalcProps> = (props) => {
    const { history } = props

    const [view, setView] = useState<View>('money')

    return (
        <div className={css.container}>
            <div className={css.title}>
                <Text size="l" view="primary">История</Text>
                <ChoiceGroup 
                    getItemLabel={getItemLabel}
                    name="ChoiceGroupView"
                    items={VIEWS}
                    multiple={false}
                    size="xs"
                    value={view}
                    view="ghost"
                    onChange={setView}
                />
            </div>
            <div className={css.content}>
                {history.map(item => (
                    <div key={item.id} className={css.row}>
                        <Text size="m" view="secondary">{new Date(item.date).toLocaleDateString('ru-RU')}</Text>
                        { view === 'money'
                            ? <Text font="mono" size="m" view="primary" >{item.moneyValue.toLocaleString('ru-RU', MONEY_FORMAT_OPTIONS)} ₽</Text>
                            : <Text font="mono" size="m" view="primary" >{item.meterValue.toLocaleString('ru-RU', METER_FORMAT_OPTIONS)} кВт/ч</Text>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}