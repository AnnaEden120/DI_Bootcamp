import { INCREASE_COUNT, DECREASE_COUNT } from "./counter.action.types";

let increaseCount=()=>{
    return{
        type: INCREASE_COUNT,
        payload :'increase',
    }
}


let decreaseCount=()=>{
    return{
        type: DECREASE_COUNT,
        payload :'decrease',
    }
}

export{increaseCount, decreaseCount}