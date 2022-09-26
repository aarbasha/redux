import { INCREMANT, DECREMANT, RESET, INC_BY_VALUE } from "./Types"

export const Incremant = async (dispatch) => {
    return dispatch({ type: INCREMANT })
}

export const Decremant = async (dispatch) => {
    return dispatch({ type: DECREMANT })
}

export const Reset = async (dispatch) => {
    return dispatch({ type: RESET })
}

export const IncByValue = async (v, dispatch) => {
    return dispatch({
        type: INC_BY_VALUE,
        payloid: v
    })
}