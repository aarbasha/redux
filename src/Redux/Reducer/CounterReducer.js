//setup 2  create Reducer
import { INCREMANT, DECREMANT, RESET, INC_BY_VALUE } from "../Actions/Types"

// Tha Reducer ==> (state = {} , Actions:)
const CounterReducer = (state = { anas: 0, users: '', data: '', active: false }, action) => {
    // setup 6
    switch (action.type) {
        case INCREMANT:
            // get all data in state , and update this data (anas )
            return { ...state, anas: state.anas + 1 }
        case DECREMANT:
            if (state.anas === 0) {
                return { ...state, anas: 0 }
            } else {
                return { ...state, anas: state.anas - 1 }
            }
        case RESET:
            return { ...state, anas: 0 }

        case INC_BY_VALUE:
            return { ...state, anas: state.anas + action.payloid }
        default:
            return state
    }
}
export default CounterReducer