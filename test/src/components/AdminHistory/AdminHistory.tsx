import { FC, useState } from "react"
import { Text } from '@consta/uikit/Text'
import css from './AdminHistory.module.css'
import type { AdminHistoryProps } from './types'
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

export const AdminHistory: FC<AdminHistoryProps> = (props) => {
    const { history } = props

    const [view, setView] = useState<View>('money')

    const periods = history.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1).map(item => item.date)
    const uniqPeriods = [... new Set(periods)]

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
                {uniqPeriods.map(period => (
                    <div key={period}>
                        <Text size="s" transform="uppercase" view="primary" weight="medium">{new Date(period).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}</Text>
                        {history.filter(item => item.date === period).map(item => (
                            <div key={item.id} className={css.row}>
                                <div>
                                <Text size="s" view="secondary">{item.address}</Text>
                                <Text size="xs" view="ghost">{item.payer}</Text>
                                </div>
                                { view === 'money'
                                    ? <Text font="mono" size="m" view="primary" >{item.moneyValue.toLocaleString('ru-RU', MONEY_FORMAT_OPTIONS)} ₽</Text>
                                    : <Text font="mono" size="m" view="primary" >{item.meterValue.toLocaleString('ru-RU', METER_FORMAT_OPTIONS)} кВт/ч</Text>
                                }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}