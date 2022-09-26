import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { DECREMANT, INCREMANT, RESET } from '../Redux/Actions/Types';
import { Incremant, Decremant, Reset, IncByValue } from '../Redux/Actions/ActionCreator';

const Counter = () => {
    // const [anas, setAnas] = useState(0)
    //setup 7 import data from redux (CountReducer) in any components 
    const anasState = useSelector(state => state.counter.anas)
    //setup 8 create dispatch in any components 
    const dispatch = useDispatch()

    const btnIncremantByValue = (v) => {
        IncByValue(v, dispatch)
    }
    const btnIncremant = () => {
        Incremant(dispatch)
    }
    const btnDecremant = () => {
        Decremant(dispatch)
    }
    const btnReset = () => {
        Reset(dispatch)
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <h1 className='mt-5'> Redux React</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <span className='btn btn-light'> {anasState}</span>
            </div>
            <hr />
            <div className='d-flex justify-content-center'>
                <button onClick={() => btnIncremantByValue(30)} className='mx-2 btn btn-success'>
                    IncremantByValue +</button>
                <button onClick={btnIncremant} className='mx-2 btn btn-success'>Incremant +</button>
                <button onClick={btnDecremant} className='mx-2 btn btn-danger'>Decremant -</button>
                <button onClick={btnReset} className='mx-2 btn btn-dark'>RESET</button>
            </div>
        </div>
    )
}

export default Counter