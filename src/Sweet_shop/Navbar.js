import React, { useState } from 'react'
import Abouts from './Abouts'
function Navbar() {
    const clickmenu=(e)=>
    {
        let value=e.target.getAttribute("id");
        console.log(value);
        if(value==="home")
        {
            document.getElementById("productouter").removeAttribute("class");
            document.getElementById("contactus").setAttribute("class","hidden");
            document.getElementById("carts").setAttribute("class","hidden");
            document.getElementById("aboutus").setAttribute("class","hidden");
            document.getElementById("proddescp").setAttribute("class","hidden");
              document.getElementById("slide").removeAttribute("class");
           
        } 
        else if(value==="contact"){
            document.getElementById("contactus").removeAttribute("class");
            document.getElementById("carts").setAttribute("class","hidden");
            document.getElementById("aboutus").setAttribute("class","hidden");
            document.getElementById("slide").setAttribute("class","hidden");
            document.getElementById("productouter").setAttribute("class","hidden");
        }
        else if(value==="about")
        {
            document.getElementById("aboutus").removeAttribute("class");
            document.getElementById("carts").setAttribute("class","hidden");
            document.getElementById("contactus").setAttribute("class","hidden");
            document.getElementById("slide").setAttribute("class","hidden");
            document.getElementById("productouter").setAttribute("class","hidden");  
        }
        else if(value==="cart")
        {
            document.getElementById("carts").removeAttribute("class");
            document.getElementById("aboutus").setAttribute("class","hidden");
            document.getElementById("contactus").setAttribute("class","hidden");
            document.getElementById("slide").setAttribute("class","hidden");
            document.getElementById("productouter").setAttribute("class","hidden");
        }
       
    }

    return (
    <>
    <div id="navouter">
        <div id="divlogo"><img id="logo_sweet" src='sweetslogo3.png' alt=''></img></div>
        <div id="searchdiv"><input id="inpsearch" type="text"></input><button id="btnsearch">Search</button></div>
        <div id="menubar">
            <a onClick={clickmenu} id="home">Home</a>
            <a onClick={clickmenu} id="about">About us</a>
            <a onClick={clickmenu} id="contact">Contact us</a>
            <a onClick={clickmenu} id="cart">Cart</a>
        </div>
    </div>
   {/* <Abouts></Abouts> */}
    </>
  )
}

export default Navbar