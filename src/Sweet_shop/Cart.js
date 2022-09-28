import React from 'react'
export default function Cart(props) { 
  if(props.arrCart.length>0){  
    return(  
    <div id="cartid" className='hidden' >
      <table>
        <th>Product Id</th><th>Product Image</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Amount</th><th>Action</th>
      {
    props.arrCart.map(
      (element,i) => {
          return (
            <>
                <tr><td>{element.id}</td><td><img id="cartimg" src={element.image} alt=""/></td><td>{element.productname}</td><td>{element.price}</td><td> <button className='btnIncdec' id="inpdec" indx={i} onClick={props.decrementCart} >-</button><input  type="number" ref={props.refinput} value={element.prodquantity} className='quantIncdec'/><button  id="btninc" className='btnIncdec' indx={i} onClick={props.incrementCart}>+</button></td><td>{element.amt}</td><td><button id="remove" indx={i} onClick={props.remove}>Remove</button></td></tr>
          
            </>    
          )  
   }
  )}
  </table>
  </div>

    )
  }

}

