import {Decrement, Increment} from "./actions.js";

export const increment = (payload)=> ({
    type: Increment,
    payload
})

export const decrement = (payload)=> ({
    type: Decrement,
    payload
})
