import { FC } from "react";
import { Text } from '@consta/uikit/Text'
import type { UserMeterProps } from './types'
import css from './UserMeter.module.css'

const METER_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
    minimumIntegerDigits: 6,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
}

export const UserMeter: FC<UserMeterProps> = (props) => {
    const { meters } = props

    return (
        <div className={css.userMeter}>
            <div className={css.title}>
                <Text size="l" view="primary">Счётчики</Text>
            </div>
            <div className={css.content}>
                {meters.map(meter => (
                    <div key={meter.id} className={css.meter}>
                        <Text size="m" view="secondary">{meter.name}</Text>
                        <Text font="mono" size="m" view="primary" >{meter.value.toLocaleString('ru-RU', METER_FORMAT_OPTIONS)} кВт/ч</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}