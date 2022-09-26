import React from 'react'

export default function Cart(props) {
  // return(<p>helo</p>)
  
    return(
    props.cartarr===undefined? <div>NO Data </div>:
    
    props.cartarr.map(
      (element) => {
          return (
            <div>
              <ul type="disc">
                  <li style={{ 
                      fontWeight: 'bold', 
                      color: 'red' }}
                  >
                      {element.id1}
                  </li>
                  <li>{element.id2}</li>
              </ul>
              </div>
              
              
          )
          
    
    
    
   }
  )
    )
}

