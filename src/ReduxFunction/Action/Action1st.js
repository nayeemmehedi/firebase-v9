export const increment =()=>{
    return {
        type : "increment"
    }
}

export const decrement =()=>{
    return {
        type : "decrement"
    }
}
export const color =(e)=>{
    return {
        type : "color",
        payload : e
    }
}