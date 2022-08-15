import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../reducers/counterRedux/counter.actions";
import { decreaseCount } from "../reducers/counterRedux/counter.actions";
import { COUNTER_KEY } from "../reducers/counterRedux/counter.reducer";

const Counter =()=>{
let dispatch= useDispatch()

let increaseBtn=()=>{
    dispatch(increaseCount())
}

let decreaseBtn=()=>{
    dispatch(decreaseCount())
}

    let viewCounter=useSelector((state)=>{
        return state[COUNTER_KEY]
    })
    return(
        <React.Fragment>
        <div className="row">
            <div className="card">
                <div className="card-body">
                <div className="box">
                <button className="clickEffect" onClick={increaseBtn}>+</button>
                </div>
                <div className="box">
                    <span>{viewCounter.count}</span>
                </div>
                <div className="box">
                    <button className="clickEffect" onClick={decreaseBtn}>-</button>
                </div>
                </div>
            </div>
        </div>
</React.Fragment>
        
    )
}

export default Counter