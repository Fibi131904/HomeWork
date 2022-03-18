import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { PATH } from './Pages'


function Header() {
    const styleActive = (params: { isActive: any }) => {
        return { color: params.isActive ? 'lime' : '' }
    }
    return (
        <div className={s.header}>

            <NavLink to={PATH.PRE_JUNIOR} className={s.link} style={styleActive}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.JUN} className={s.link} style={styleActive}> Jun </NavLink>
            <NavLink to={PATH.JUN_PLUS} className={s.link} style={styleActive}> JunPlus </NavLink>
            <div className={s.block} />
        </div>
    )
}

export default Header
