import React, { useState } from 'react'
import './sweetshop.css'
let arrSignup=[];
function SignupLogin(props) {
    const[arrUser,setArruser]=useState();
    const[hidesl,setHide]=useState("loginnone");
    const[showsignup,setSignup]=useState("signupBlock");
    const signup=()=>
    {
        let name=document.getElementById("uname").value;
        let email=document.getElementById("uemail").value;
        let password=document.getElementById("passwd").value;
        let obj={uname:name,uemail:email,passwd:password}
        if(name===""||email===""||password==="")
        {
            alert("Please fill all the field");
        }
        else{
            arrSignup.push(obj);
            setArruser(arrSignup);
            alert("Sign Up Successfully");
            setSignup("signupnone");
            setHide("loginBlock");
            console.log(arrUser);
           } 
    }
    const login=()=>
    {
        let name=document.getElementById("luname").value;
        let password=document.getElementById("lpasswd").value;
        if(name===""||password==="")
        {
            alert("Please fill all the fields");
        }
        else if(arrUser[0].uname===name && arrUser[0].passwd===password)
           {
                alert("You are Login successfully");
                props.clicklogin();
           }
           else {
            alert("login failed");
           }
    }
  return (
     <>
     <div id="outer">
        <div id="inner">
            <div id="signup" className={showsignup} >
                <h3>Sign Up</h3>
               <input type="text"  placeholder='Enter Your Name' id="uname"></input>
              <input type="text" placeholder='Enter Your Email' id="uemail"></input>
                <input type="text" placeholder='Enter Your Password' id="passwd"></input><br/>
                <button id="btnCreate" onClick={signup} >Create Account</button>
                <p></p>
            </div>
            <div id="Login" className={hidesl} >
                <h3>Login</h3>
               <input type="text" id="luname" placeholder='Enter Your Name'></input>
              <input type="text" id="lpasswd" placeholder='Enter Your Password'></input><br/>
                <button id="btnLogin" onClick={login}>Login Account</button>
            </div>
        </div>
    </div>
     </>
  )
}

export default SignupLogin