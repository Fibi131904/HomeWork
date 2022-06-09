const initState = {
    loading: false
}
type InitStateType= typeof initState
export type LoadingACType= ReturnType<typeof loadingAC >
type ActionType= LoadingACType

export const loadingReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': 
            return {
                ...state,
                loading:action.loading
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean) =>( {type:'LOADING', loading} as const )// fix any