import logo from './logo.svg';
import './App.css';
import SignupLogin from './Sweet_shop/SignupLogin';
import Home from './Sweet_shop/Home';
import { useState } from 'react';
import Navbar from './Sweet_shop/Navbar';
import Slidercomp from './Sweet_shop/Slidercomp';
import Abouts from './Sweet_shop/Abouts';
import Contactus from './Sweet_shop/Contactus';
import Cart from './Sweet_shop/Cart';
function App() {
 const[flag,setFlag]=useState(true);
 const hide=()=>{
  setFlag(false);
 }
 
  if(flag){
    return(
      <SignupLogin clicklogin={hide} ></SignupLogin>
    )
  }
  else{
    return (
      <>
      <Navbar></Navbar>
      {/* <Slidercomp></Slidercomp> */}
      <Home></Home>  
      <Abouts></Abouts>
      <Contactus></Contactus>
      <Cart></Cart>
      
      </>
    );
  }

 
}

export default App;
