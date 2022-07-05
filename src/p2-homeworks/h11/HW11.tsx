import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import { SuperDoubleRange } from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'



function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange2 = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }
    return (
        <div >
            <hr />
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    value={value1}

                />


                <div className={s.superDoubleRange}>
                    <span>{value1}</span>
                    <SuperDoubleRange onChangeRange2={onChangeRange2} value={[value1, value2]} />
                    <div className={s.divValue2}>{value2}</div>
                </div>
            </div>

        </div>
    )
}

export default HW11
