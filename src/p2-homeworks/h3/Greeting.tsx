import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void// need to fix any
    addUser: () => void
    error: string // need to fix any
    totalUsers:number // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>)=> void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onKeyPress, totalUsers} // деструктуризация пропсов
) => {
    const inputClass =error? s.error : s.input // need to fix with (?:)

    return (
        <div>
            <input
            value={name}
            onChange={setNameCallback} 
            className={inputClass}
            onKeyPress={onKeyPress}
             />
            <span className={s.error}>{error}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.total}>{totalUsers}</span>
        </div>
    )
}

export default Greeting

