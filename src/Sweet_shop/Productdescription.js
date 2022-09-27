import React, { createRef, useState } from 'react'
import Cart from './Cart';
// var ind;
function Productdescription(props) {
  console.log(props.index.id);
    // const [inpquntity,setInpquantity]=useState("0");
    
    // // const [cartItem,setcartItem]=useState("dfgg");
    // const inpnum=createRef();
    // const[arrCart,setArrcartitem]=useState([]);
    // console.log(arrCart.le)
    // const btndecrement=()=>
    // {
    //    let inpval=inpnum.current.value;
    //    if(inpval>0){
    //    let inpval1=parseInt(inpval)-1;
         
    //      setInpquantity(inpval1);
    //     //  console.log(inpquntity);
    //     }  
    // }
    // const increment_val=()=>
    // {
    //     let inpval=inpnum.current.value;
    //     let inpval2=parseInt(inpval)+1;
    //     setInpquantity(inpval2);

    // }
    // const addCart=(e)=>{
    //     ind=e.target.getAttribute("ind")
    //     console.log(ind-1);
    //   //  document.getElementById("carts").removeAttribute("class");
    //     console.log(props.proditem);
    //     arrCart.push(props.proditem);
    //     setArrcartitem([...arrCart]);
    //     console.log(arrCart);
    //     // setcartItem(<Cart cartarr={arrCart}></Cart>); 
    // }
  return (
    <>
    {/* <div>helo</div> */}
    <div id="proddescp" className='hidden'>
     <div id="prodDescpouter" >
        <div id="divDispimg"><img className='despimg' src={props.index.image} alt=""></img></div>
        <div id="divDispCart">
            <h3>{props.index.productname}</h3>
            <p>{props.index.discription}</p>
            <h4>{props.index.price}/{props.index.quantity}</h4>
            {/* <button className='btnIncdec' >-</button><input  type="number" value={props.index.prodquntity} className='quantIncdec'/><button  className='btnIncdec'>+</button><br></br> */}
             <button className="btncart"  ind={props.index.id} onClick={props.add}>Add to Cart</button>
        </div>
     </div> 
     {/* <p>{props.proditem.id}</p> */}
    </div>
       {/* <Cart cartarr={props.arrcart}  ></Cart>   */}
        {/* <Cart></Cart> */}
    </>
  )
}

export default Productdescription