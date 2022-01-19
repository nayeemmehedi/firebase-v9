export const ColorReducer =(state="black" ,action)=>{

    console.log(state)


    switch (action.type) {
        case "color":
            

           return state = action.payload
            
            
    
        default:
            return state
    }

}