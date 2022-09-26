import React, { createRef, useState } from 'react'
import Cart from './Cart';
var ind;
function Productdescription(props) {
    const [inpquntity,setInpquantity]=useState("0");
    // const [cartItem,setcartItem]=useState("dfgg");
    const inpnum=createRef();
    const[arrCart,setArrcartitem]=useState([]);
    const btndecrement=()=>
    {
       let inpval=inpnum.current.value;
       if(inpval>0){
       let inpval1=parseInt(inpval)-1;
         
         setInpquantity(inpval1);
        //  console.log(inpquntity);
        }  
    }
    const increment_val=()=>
    {
        let inpval=inpnum.current.value;
        let inpval2=parseInt(inpval)+1;
        setInpquantity(inpval2);
    }
    const addCart=(e)=>{
        ind=e.target.getAttribute("ind")
        console.log(ind-1);
       // document.getElementById("carts").removeAttribute("class");
        console.log(props.proditem);
        arrCart.push(props.proditem);
        setArrcartitem([arrCart]);
        console.log(arrCart);
        // setcartItem(<Cart cartarr={arrCart}></Cart>); 
    }
  return (
    <>
    <div id="proddescp" >
     <div id="prodDescpouter">
        <div id="divDispimg"><img className='despimg' src={props.proditem.image} alt=""></img></div>
        <div id="divDispCart">
            <h3>{props.proditem.productname}</h3>
            <p>{props.proditem.discription}</p>
            <h4>{props.proditem.price}/{props.proditem.quantity}</h4>
            <button className='btnIncdec' onClick={btndecrement}>-</button><input ref={inpnum} type="number" value={inpquntity} className='quantIncdec'/><button onClick={increment_val} className='btnIncdec'>+</button><br></br>
            <button className="btncart" onClick={addCart} ind={props.proditem.id}>Add to Cart</button>
        </div>
     </div>
     {/* <p>{props.proditem.id}</p> */}
    </div>
       <Cart cartarr={arrCart}></Cart>
       
    </>
  )
}

export default Productdescription