import React, { useState } from 'react'
import Abouts from './Abouts'
function Navbar() {
    const clickmenu=(e)=>
    {
        let value=e.target.getAttribute("id");
        console.log(value);
        if(value==="home")
        {
            document.getElementById("slide").removeAttribute("class");
            document.getElementById("productouter").removeAttribute("class");
            document.getElementById("proddescp").setAttribute("class","hidden");
            document.getElementById("cartid").setAttribute("class","hidden");
            document.getElementById("aboutus").setAttribute("class","hidden");
            document.getElementById("contactus").setAttribute("class","hidden");

            
        } 
        else if(value==="contact"){
            document.getElementById("contactus").removeAttribute("class");
            document.getElementById("aboutus").setAttribute("class","hidden");
            document.getElementById("slide").setAttribute("class","hidden");
            document.getElementById("productouter").setAttribute("class","hidden");
            document.getElementById("proddescp").setAttribute("class","hidden");
            document.getElementById("cartid").setAttribute("class","hidden");
          
            
        }
        else if(value==="about")
        {
            document.getElementById("aboutus").removeAttribute("class");
            document.getElementById("contactus").setAttribute("class","hidden");
               document.getElementById("slide").setAttribute("class","hidden");
               document.getElementById("productouter").setAttribute("class","hidden");  
               document.getElementById("proddescp").setAttribute("class","hidden");
               document.getElementById("cartid").setAttribute("class","hidden");
        }
        else if(value==="cart")
        {
            document.getElementById("cartid").removeAttribute("class");
            document.getElementById("proddescp").setAttribute("class","hidden");
            document.getElementById("slide").setAttribute("class","hidden");
            document.getElementById("productouter").setAttribute("class","hidden");
            document.getElementById("aboutus").setAttribute("class","hidden");
            document.getElementById("contactus").setAttribute("class","hidden");
        }
       
    }

    return (
    <>
    <div id="navouter">
        <div id="divlogo"><img id="logo_sweet" src='sweetslogo3.png' alt=''></img></div>
        <div id="searchdiv">
            <h1>Indian Sweet Shop</h1>
            </div>
        <div id="menubar">
            <a onClick={clickmenu} id="home" className='anchornav'>Home</a>
            <a onClick={clickmenu} id="cart" className='anchornav'>Cart</a>
            <a onClick={clickmenu} id="about">About us</a> 
            <a onClick={clickmenu} id="contact">Contact us</a>
            
        </div>
    </div>
    </>
  )
}

export default Navbar