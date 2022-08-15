import { INCREASE_COUNT, DECREASE_COUNT } from "./counter.action.types";

export const COUNTER_KEY = 'counterStore'

let initialState={
    count:0
}

let counterReducer=(state=initialState, action)=>{
    let {type, payload}= action

    switch(type){
        case INCREASE_COUNT:
            return{
                count:state.count+1
            }
            case DECREASE_COUNT:
            return{
                count:(state.count-1>0)?{ 
                    state.count-1:1
                }
            }

            default: return state
    }
}

export {counterReducer}
