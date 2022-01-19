import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase/firebase";
import {useAuth} from "../firebase/AuthContext";

export default function Login() {
    
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const [formerror, setFormerror] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const [success,setsuccess] = useState(true)




  const { signin } =useAuth()



 
  const newvalue = (e) => {
    const makevalue = { ...form };

    makevalue[e.target.name] = e.target.value;
    setForm(makevalue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setFormerror(validate(form));
    setisSubmit(true);
  };

  const validate = (v) => {
    let error = {};

    if (!v.name) {
      error.name = "value not found..";
    }
    if (!v.password) {
      error.password = "password not found..";
    }
    return error;
  };




  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (Object.keys(formerror) == 0 && isSubmit) {


        signin(auth,form.name,form.password)
        .then( data =>{
            setsuccess(true)


        })
        .catch(error =>
            {
                setsuccess(false)
                console.log(error)
                
                
            }

        )




    }



  }, [form, formerror, isSubmit, signin]);

  // const nameref = useRef()
  // console.log(nameref.current.value)

  return (
    <div className="d-flex justify-content-center">
      <div>
        <div>

         
         { !success &&  <h4 style={{color:"red"}}>LOgin falied..</h4>}

          <h6>LOgin Page..</h6>

          <form onSubmit={onSubmit}>
            <label htmlFor="">User Email</label>
            <input type="text" name="name" onChange={newvalue} /> <br />
            <small style={{ color: "red" }}>{formerror.name}</small>
            <br />
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={newvalue} /> <br />
            <small style={{ color: "red" }}>{formerror.password}</small>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
