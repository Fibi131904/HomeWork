import { type } from 'os'
import React from 'react'
import { isPropertySignature } from 'typescript'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from './Affairs.module.css'


type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') }
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }

    
    

return (
    <div className= {s.btnfilter}>
        {mappedAffairs}
        <button onClick={setAll}>All</button>
        <button onClick={setHigh}>High</button>
        <button onClick={setMiddle}>Middle</button>
        <button onClick={setLow}>Low</button>
    </div>
)
}

export default Affairs
