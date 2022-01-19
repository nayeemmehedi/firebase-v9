
export const CounterReducer =(state=0,action)=>{

    switch (action.type) {

        case "increment":
            if(state<=9){
                return state+1

            }
            break
           
        

         case "decrement":
            if(state>=1){
                return state-1
                

            }
            break
           
        default:
            return state
    }

}