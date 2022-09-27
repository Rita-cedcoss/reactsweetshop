import React from 'react'
export default function Cart(props) { 
  // return(<>
  // <p>sfdfsgdstyg</p>
  // </>)
  if(props.arrCart.length>0){  
    console.log(props.arrCart[0].id);
    return(
      // <div>cart</div>
    // props.cartarr===undefined? <div>NO Data </div>: <>\
    
    <div id="cartid" className='hidden'>
      <table>
        <th>Product Id</th><th>Product Image</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Action</th>
      {
      // <tr><th>Id</th><th>Ptoduct Image</th><th>Product Name</th><th>Product Price </th></tr>
    props.arrCart.map(
      (element) => {
          return (
            <>
                <tr><td>{element.id}</td><td><img id="cartimg" src={element.image} alt=""/></td><td>{element.productname}</td><td>{element.id}</td><td> <button className='btnIncdec' >-</button><input  type="number" value={element.prodquantity} className='quantIncdec'/><button  className='btnIncdec'>+</button></td><td>{element.id}</td></tr>
            {/* </table> */}
            </>    
          )  
   }
  )}
  </table>
  </div>

    )
  }

}

