import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth  } from "../firebase/AuthContext";

export default function Singup() {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [signupError, setSignupError] = useState({});
  const [confirm, setconfirm] = useState({});
  const [submit, setsubmit] = useState(false);
  const {  CREATE  } = useAuth()


  const signFun = (e) => {
    let value = { ...signup };
    value[e.target.name] = e.target.value;

    setSignup(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSignupError(validation(signup));
    setconfirm(confirmCheckValidation(signup));
    setsubmit(true);
  };

  const confirmCheckValidation = (e) => {
    const error = {};

    if (e.password && e.confirmpassword) {
      // eslint-disable-next-line eqeqeq
      if (!(e.password == e.confirmpassword)) {
        error.name = "password and confirm password not match..";
      }
    }

    return error;
  };

  const validation = (e) => {
    // username:"",
    // password:"",
    // confirmpassword:""

    const error = {};

    if (!e.username) {
      error.name = "Name can't found";
    }
    if (!e.password) {
      error.password = "Password can't found";
    }
    if (!e.confirmpassword) {
      error.confirmpassword = "Confirm Password can't found";
    }

    return error;
  };



  useEffect(() => {
    

    if (Object.keys(signupError) == 0 && Object.keys(confirm) == 0 && submit) {

        CREATE(auth,signup.username, signup.password)

    }



  }, [CREATE, confirm, signup, signupError, submit]);



  
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h5>SIGN IN page..</h5>

        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">user email</label> <br />
          <input type="text" name="username" onChange={signFun} /> <br />
          <small style={{ color: "red" }}>{signupError.username}</small> <br />
          <label htmlFor="">password</label> <br />
          <input type="password" name="password" onChange={signFun} /> <br />
          <small style={{ color: "red" }}>{signupError.password}</small> <br />
          <label htmlFor="">confirm password</label> <br />
          <input
            type="password"
            name="confirmpassword"
            onChange={signFun}
          />{" "}
          <br />
          <small style={{ color: "red" }}>
            {signupError.confirmpassword}
          </small>{" "}
          <br />
          <small style={{ color: "red" }}>{confirm.name}</small> <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
