import React, { useState } from 'react'
import Productdescription from './Productdescription';
function Product(props) {
   let arr=[
      {id1: 100, id2:"dsgfghfdf" }
      ,{id1: 101, id2:"rita" }
   ]
//    let arrProduct=[
//       {
//          "id":"1",
//          "image":"https://i.ndtvimg.com/i/2017-08/kaju-barfi_650x400_71501923806.jpg",
//          "productname":"Kaju katli Sweet",
//          "price":"Rs:250",
//          "quantity":"200g",
//          "prodquntity":"1",
//          "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
//       },
//       {
//         "id":"2",
//         "image":"https://www.sanjanafeasts.co.uk/wp-content/uploads/2016/11/Rum-Soaked-Kala-Jamun-01-1.jpg.webp",
//         "productname":"Kala Jamun Sweet",
//         "price":"Rs:150",
//          "quantity":"400g",
//          "prodquntity":"1",
//         "discription":"Kala Jamun is an Indian sweet made with milk solids. These fried balls are dipped in a sugar syrup flavored with cardamom, rose water and saffron! They are the perfect festive treat.",
//      },
//      {
//         "id":"3",
//         "image":"https://www.awesomecuisine.com/wp-content/uploads/2007/10/kalakand.jpg",
//         "productname":"Kalakand",
//         "price":"Rs:200",
//          "quantity":"1kg",
//          "prodquntity":"1",
//         "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
//      }
//      ,{
//         "id":"4",
//         "image":"https://www.awesomecuisine.com/wp-content/uploads/2014/08/besan-laddu.jpg",
//         "productname":"Besan Laddo",
//         "price":"Rs:250",
//         "quantity":"1kg",
//         "prodquntity":"1",
//         "discription":"Besan Ladoo is a popular Indian sweet made with gram flour (besan), ghee and sugar. It is often made for special occasions and festivals like Diwali.",
//      },
//      {
//         "id":"5",
//         "image":"https://www.pngitem.com/pimgs/m/151-1518988_clip-art-motichoor-kakarla-swagruha-foods-motichur-laddu.png",
//         "productname":"Motichor Laddo",
//         "price":"Rs:120",
//         "quantity":"1kg",
//         "prodquntity":"1",
//         "discription":"The word 'motichoor' literally translates to crushed pearls, the chickpea flour globules is fried in ghee or oil, and soaked in sugar syrup.",
//      },
//      {
//       "id":"6",
//       "image":"https://cdn.storehippo.com/s/573db1519f0d58741f0cc5c1/5f917ab1b79611d82697c537/webp/soanpappidi-4-1--640x640.png",
//       "productname":"Soan Papdi",
//       "price":"Rs:150",
//       "quantity":"400g",
//       "prodquntity":"1",
//       "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
//    },
//    {
//      "id":"7",
//      "image":"https://i0.wp.com/anufoodclub.com/wp-content/uploads/2021/09/Rasgulla.jpg",
//      "productname":"Chena Sweet",
//      "price":"Rs:400",
//       "quantity":"500g",
//       "prodquntity":"1",
//      "discription":"Chena sandwich is a sweet dish which has amzing flavor and melts in the mouth so smoothly",
//   },
//   {
//      "id":"8",
//      "image":"https://www.cookingcarnival.com/wp-content/uploads/2020/06/Rasmalai.jpg",
//      "productname":"Rasmalai",
//      "price":"Rs:400",
//       "quantity":"1kg",
//       "prodquntity":"1",
//      "discription":"Rasmalai is yet another one of my favorite sweets. This Bengali specialty is made with rasgulla (sweetened balls of paneer) soaked in sweetened, thickened milk that has been scented with cardamom and saffron",
//   }
//   ,{
//      "id":"9",
//      "image":"https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg",
//      "productname":"Kheer",
//      "price":"Rs:150",
//      "quantity":"250g",
//      "prodquntity":"1",
//      "discription":"kheer, also called payasam, a chilled South Asian dessert made from slow-cooked rice, milk, and sugar, much like a rice pudding. It is typically flavoured with saffron, cardamom, raisins, and/or various nuts, notably pistachios, cashews, and almonds.",
//   },
//   {
//      "id":"10",
//      "image":"https://mirchi.com/os/cdn/content/images/gujiya%20kandoi%20haribhai_medium_0670244.webp",
//      "productname":"Gujia",
//      "price":"Rs:250",
//      "quantity":"1kg",
//      "prodquntity":"1",
//      "discription":"The word 'motichoor' literally translates to crushed pearls, the chickpea flour globules is fried in ghee or oil, and soaked in sugar syrup.",
//   }
//   ,{
//    "id":"11",
//    "image":"https://mirchi.com/os/cdn/content/images/sweet%20ghewar%20ram%20asrey_medium_0298041.webp",
//    "productname":"Ghevar Sweets",
//    "price":"Rs:420",
//    "quantity":"1 Piece",
//    "prodquntity":"1",
//    "discription":"Ghevar is a disc-shaped sweet cake made with [Besan] (refined chickpea flour) and soaked in sugar syrup. Flour, ghee, milk, and water are mixed to make a batter. The batter is then fried in ghee and the sweet is fried into a golden honeycomb-like disc. Common toppings include spices and nuts.",
// },
// {
//    "id":"12",
//    "image":"https://www.babsprojects.com/wp-content/uploads/2013/02/shrikhand-hung-yogurt-sq-735x591.jpg",
//    "productname":"Shrikhand",
//    "price":"Rs:120",
//    "quantity":"500g",
//    "prodquntity":"1",
//    "discription":"Shrikhand is a semi soft, sweetish sour, whole milk product prepared from lactic fermented curd. The curd (dahi) is partially strained through a cloth to remove the whey and thus produce a solid mass called chakka (the basic ingredient for Shrikhand).",
// },{
//    "id":"13",
//    "image":"https://images.hindi.news18.com/ibnkhabar/uploads/2021/10/Gajar-Halwa.jpg",
//    "productname":"Gajar Ka Halwa",
//    "price":"Rs:150",
//    "quantity":"250g",
//    "discription":"Ghevar is a disc-shaped sweet cake made with [Besan] (refined chickpea flour) and soaked in sugar syrup. Flour, ghee, milk, and water are mixed to make a batter. The batter is then fried in ghee and the sweet is fried into a golden honeycomb-like disc. Common toppings include spices and nuts.",
// },
// {
//    "id":"14",
//    "image":"https://www.vegrecipesofindia.com/wp-content/uploads/2017/10/peda-recipe-2.jpg",
//    "productname":"Peda",
//    "price":"Rs:350",
//    "quantity":"1 kg",
//    "prodquntity":"1",
//    "discription":"Peda is a sweet dish hailing from the Indian subcontinent. It originated from Mathura, Uttar Pradesh, India. Usually prepared in thick, semi-soft, its main ingredients are khoa, sugar and traditional flavorings including cardamom seeds, pistachio nuts and saffron.",
// }
//    ]
   // const [productdespID,setProductdespID]=useState("hidden");
   // let [ind,setInd]=useState(0)
   //  const productDisplay=(e)=>
   //  {  
   //      ind=e.target.parentElement.getAttribute("index")
   //      setInd(ind)
   //      console.log( ind);

   //      console.log(props.prodarr[ind].item);
   //    //   setProductdespID(" ")
   //          // document.getElementById("productouter").setAttribute("class","hidden");
   //          // document.getElementById("slide").setAttribute("class","hidden");
   //          // document.getElementById("proddescp").removeAttribute("class");
   //          // document.getElementById("prodDescpouter").removeAttribute("class");
   //  }
   //  const cartarr1=[];
   //  const [cartarr1,setCartarr1]=useState([]);
   //  const addcart=(e)=>
   //  {
   //       console.log(e.target.getAttribute("ind"));
   //       // cartarr1.push(arrProduct[ind]);
   //       setCartarr1(cartarr1);
   //       console.log(cartarr1);
   //  }

  return (
    <>
    <div id="productouter">
        {/* <h1>Sweets Product</h1> */}
        
        <div id="Procduct">
            {/* <div className="productdetail">
               <img className='imgproduct' src={arrProduct[0].image} style={{height:"30%",width:"80%"}}></img>
               <p>{arrProduct[0].productname}</p>
               <p>{arrProduct[0].quantity}-{arrProduct[0].price}</p>
               <button className='btnadd' >Add To Cart</button>
            </div> */}
            {
               props.prodarr.map((item,i)=>{
                  return(
                     <div className="productdetail" idx={item.id} index={i} onClick={props.propdisp} >
                     <img className='imgproduct' alt='img' src={item.image} style={{height:"30%",width:"80%"}}></img>
                     <p>{item.productname}</p>
                     <p>{item.quantity}-{item.price}</p>
                     {/* <button className='btnadd' >Add To Cart</button> */}
                  </div>
                  )
               })
            }
           
        </div>
        
    </div>
    <Productdescription index={props.arrindex} add={props.funadd}></Productdescription>
    
    </>
  )
}

export default Product