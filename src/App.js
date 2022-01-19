// import {useSelector,useDispatch} from "react-redux"
// import {increment, decrement, color} from "./ReduxFunction/Action/Action1st"

// function App() {
  

//   const value = useSelector(state => state.CounterReducer)
//   const ColorValue = useSelector(state => state.ColorReducer)

//   const dispatch = useDispatch()

//   const change =(e)=>{
//     dispatch(color(e.target.value))

//   }

 
//   return (
//     <div className="App" style ={{backgroundColor:ColorValue ,color:"white",height:'100vh'}}>

//       <button style={{ backgroundColor:"blue"}} onClick={()=>dispatch(increment())}>add item</button>

//       <h6>value ={'>'} {value}</h6>

//       <button style={{ backgroundColor:"blue"}} onClick={()=>dispatch(decrement())} >Remove item</button>


//       <div>
//                <select id="lang" onChange={change} >
//                   <option value="#5d8aa8">blue</option>
//                   <option value="green">green</option>
//                   <option value="blue">blue</option>
//                </select>
//                <p></p>
              
//            </div>

    
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import { useAuth } from './firebase/AuthContext'
import Login from './Login/Login'
import Singup from './Login/Singup'
import { signOut } from "firebase/auth";
import { auth } from './firebase/firebase';


export default function App() {

  const {logOut} = useAuth()
  const { currentUser} = useAuth()


  


  const [toggle ,settoggle] = useState(false)

  

     const logOut1 = ()=>{

      signOut(auth)
     }


  return (

    <div>
      <h2> hello {currentUser && currentUser.email}</h2>
      <button onClick={()=>logOut1()}>Log Out..</button> <br />

      <div style={{height :"150px"}}>

        


      </div>
     
       
      
       <button onClick={()=>settoggle(!toggle)}>Toggle it </button>

       {toggle ? <Login></Login> :  <Singup></Singup> }
      
             
    </div>
  )
}

