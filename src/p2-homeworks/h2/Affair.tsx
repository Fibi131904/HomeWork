import React from 'react'
import { AffairType, FilterType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback :(id: number)=> void
   
  
   
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div >
            // show some text

            <button onClick={deleteCallback}className= {s.btn}>X</button>
        </div>
    )
}

export default Affair
