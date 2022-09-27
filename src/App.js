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
import Product from './Sweet_shop/Product';
import Productdescription from './Sweet_shop/Productdescription';
let ind=0;
function App() {
  const [prodind,setProdind]=useState(0);
  const [cartArrr,setCartarr]=useState([]);
  // const[ind,setInd]=useState(0);
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
    let arrProduct=[
      {
         "id":"1",
         "image":"https://i.ndtvimg.com/i/2017-08/kaju-barfi_650x400_71501923806.jpg",
         "productname":"Kaju katli Sweet",
         "price":"Rs:250",
         "quantity":"200g",
         "prodquantity":"1",
         "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
      },
      {
        "id":"2",
        "image":"https://www.sanjanafeasts.co.uk/wp-content/uploads/2016/11/Rum-Soaked-Kala-Jamun-01-1.jpg.webp",
        "productname":"Kala Jamun Sweet",
        "price":"Rs:150",
         "quantity":"400g",
         "prodquantity":"1",
        "discription":"Kala Jamun is an Indian sweet made with milk solids. These fried balls are dipped in a sugar syrup flavored with cardamom, rose water and saffron! They are the perfect festive treat.",
     },
     {
        "id":"3",
        "image":"https://www.awesomecuisine.com/wp-content/uploads/2007/10/kalakand.jpg",
        "productname":"Kalakand",
        "price":"Rs:200",
         "quantity":"1kg",
         "prodquantity":"1",
        "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
     }
     ,{
        "id":"4",
        "image":"https://www.awesomecuisine.com/wp-content/uploads/2014/08/besan-laddu.jpg",
        "productname":"Besan Laddo",
        "price":"Rs:250",
        "quantity":"1kg",
        "prodquantity":"1",
        "discription":"Besan Ladoo is a popular Indian sweet made with gram flour (besan), ghee and sugar. It is often made for special occasions and festivals like Diwali.",
     },
     {
        "id":"5",
        "image":"https://www.pngitem.com/pimgs/m/151-1518988_clip-art-motichoor-kakarla-swagruha-foods-motichur-laddu.png",
        "productname":"Motichor Laddo",
        "price":"Rs:120",
        "quantity":"1kg",
        "prodquantity":"1",
        "discription":"The word 'motichoor' literally translates to crushed pearls, the chickpea flour globules is fried in ghee or oil, and soaked in sugar syrup.",
     },
     {
      "id":"6",
      "image":"https://cdn.storehippo.com/s/573db1519f0d58741f0cc5c1/5f917ab1b79611d82697c537/webp/soanpappidi-4-1--640x640.png",
      "productname":"Soan Papdi",
      "price":"Rs:150",
      "quantity":"400g",
      "prodquantity":"1",
      "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
   },
   {
     "id":"7",
     "image":"https://i0.wp.com/anufoodclub.com/wp-content/uploads/2021/09/Rasgulla.jpg",
     "productname":"Chena Sweet",
     "price":"Rs:400",
      "quantity":"500g",
      "prodquantity":"1",
     "discription":"Chena sandwich is a sweet dish which has amzing flavor and melts in the mouth so smoothly",
  },
  {
     "id":"8",
     "image":"https://www.cookingcarnival.com/wp-content/uploads/2020/06/Rasmalai.jpg",
     "productname":"Rasmalai",
     "price":"Rs:400",
      "quantity":"1kg",
      "prodquantity":"1",
     "discription":"Rasmalai is yet another one of my favorite sweets. This Bengali specialty is made with rasgulla (sweetened balls of paneer) soaked in sweetened, thickened milk that has been scented with cardamom and saffron",
  }
  ,{
     "id":"9",
     "image":"https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg",
     "productname":"Kheer",
     "price":"Rs:150",
     "quantity":"250g",
     "prodquantity":"1",
     "discription":"kheer, also called payasam, a chilled South Asian dessert made from slow-cooked rice, milk, and sugar, much like a rice pudding. It is typically flavoured with saffron, cardamom, raisins, and/or various nuts, notably pistachios, cashews, and almonds.",
  },
  {
     "id":"10",
     "image":"https://mirchi.com/os/cdn/content/images/gujiya%20kandoi%20haribhai_medium_0670244.webp",
     "productname":"Gujia",
     "price":"Rs:250",
     "quantity":"1kg",
     "prodquantity":"1",
     "discription":"The word 'motichoor' literally translates to crushed pearls, the chickpea flour globules is fried in ghee or oil, and soaked in sugar syrup.",
  }
  ,{
   "id":"11",
   "image":"https://mirchi.com/os/cdn/content/images/sweet%20ghewar%20ram%20asrey_medium_0298041.webp",
   "productname":"Ghevar Sweets",
   "price":"Rs:420",
   "quantity":"1 Piece",
   "prodquantity":"1",
   "discription":"Ghevar is a disc-shaped sweet cake made with [Besan] (refined chickpea flour) and soaked in sugar syrup. Flour, ghee, milk, and water are mixed to make a batter. The batter is then fried in ghee and the sweet is fried into a golden honeycomb-like disc. Common toppings include spices and nuts.",
},
{
   "id":"12",
   "image":"https://www.babsprojects.com/wp-content/uploads/2013/02/shrikhand-hung-yogurt-sq-735x591.jpg",
   "productname":"Shrikhand",
   "price":"Rs:120",
   "quantity":"500g",
   "prodquantity":"1",
   "discription":"Shrikhand is a semi soft, sweetish sour, whole milk product prepared from lactic fermented curd. The curd (dahi) is partially strained through a cloth to remove the whey and thus produce a solid mass called chakka (the basic ingredient for Shrikhand).",
},{
   "id":"13",
   "image":"https://images.hindi.news18.com/ibnkhabar/uploads/2021/10/Gajar-Halwa.jpg",
   "productname":"Gajar Ka Halwa",
   "price":"Rs:150",
   "quantity":"250g",
   "prodquantity":"1",
   "discription":"Ghevar is a disc-shaped sweet cake made with [Besan] (refined chickpea flour) and soaked in sugar syrup. Flour, ghee, milk, and water are mixed to make a batter. The batter is then fried in ghee and the sweet is fried into a golden honeycomb-like disc. Common toppings include spices and nuts.",
},
{
   "id":"14",
   "image":"https://www.vegrecipesofindia.com/wp-content/uploads/2017/10/peda-recipe-2.jpg",
   "productname":"Peda",
   "price":"Rs:350",
   "quantity":"1 kg",
   "prodquantity":"1",
   "discription":"Peda is a sweet dish hailing from the Indian subcontinent. It originated from Mathura, Uttar Pradesh, India. Usually prepared in thick, semi-soft, its main ingredients are khoa, sugar and traditional flavorings including cardamom seeds, pistachio nuts and saffron.",
}
   ]
   
   const productDisplay=(e)=>
   {
     let ind=e.target.parentElement.getAttribute("idx");
         console.log(ind-1);
      setProdind(ind-1);
      console.log(prodind);
      console.log(arrProduct[prodind]);
      document.getElementById("slide").setAttribute("class","hidden");
      document.getElementById("productouter").setAttribute("class","hidden");
      document.getElementById("proddescp").removeAttribute("class");
      document.getElementById("cartid").setAttribute("class","hidden");
   
   }

    const addcart=(e)=>
    {
         // document.getElementById("cartid").removeAttribute("class");
         console.log(cartArrr)
         let index=e.target.getAttribute("ind");
          console.log(index-1);
         //  document.getElementById("cartid").removeAttribute("class");
         
          console.log(cartArrr);
         //  if(arrProduct[index-1].id=cartArrr[ins])

         //  console.log(arrProduct[index-1]);
         let indArr=-1;
         for(let i=0;i<cartArrr.length;i++)
         {
            if(cartArrr[i].id===arrProduct[index-1].id)
            {
               indArr=i;
            }
         }
         if(indArr>=0){
            console.log(indArr)
            cartArrr[indArr].prodquantity++;
         }
         else{
            cartArrr.push(arrProduct[index-1]);
         }
         setCartarr([...cartArrr]);  
    }
    return (
      <>
      
      <Navbar></Navbar>
      {/* <Slidercomp></Slidercomp> */}
      <Home></Home>  
      <Product prodarr={arrProduct} propdisp={productDisplay} arrindex={arrProduct[prodind]} funadd={addcart}></Product>
      {/* <Productdescription></Productdescription> */}
      {/* <Abouts></Abouts>
      <Contactus></Contactus> */}
      <Cart arrCart={cartArrr}></Cart>
      
      </>
    );
  }

 
}

export default App;
