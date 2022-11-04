import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['white', 'red', 'green', 'blue', 'dark'];

function HW12() {

    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, string>(store => store.theme.theme)
    // const theme = 'some'; // useSelector
    const changeTheme = (option: string) => {
        dispatch(changeThemeC(option))

    }

    // useDispatch, onChangeCallback



    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect
                options={themes}
                onChangeOption={(option) => changeTheme(option)} />

            <hr />
        </div>
    );
}



export default HW12;
