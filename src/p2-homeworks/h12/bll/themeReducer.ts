import { AppStoreType } from "../../h10/bll/store";

const initState = {
    theme: 'white'
};
type InitStateType = typeof initState;
export type ChangeThemeCType = ReturnType<typeof changeThemeC>;

type ActionType = ChangeThemeCType

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case  'CHANGE-THEME': {
            return {
                ...state,
                theme: action.payload.option
            };
        }
       
        default: return state;
    }
};

export const changeThemeC = (option: string) => ({ type: 'CHANGE-THEME',payload: {option}, }) as const; // fix any
export const select = (state: AppStoreType) => state.theme