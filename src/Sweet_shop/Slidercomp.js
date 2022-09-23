import React from 'react'

function Slidercomp() {
  return (
  <>
  <div id="slide">

  <div class="container-fluid" id="container_slide">
 <br></br>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner">
      <div class="item active">
        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/07/752250-kaju-barfi.jpg?itok=lGzVUKbp" alt="Los Angeles" style={{width:"100%",height:"350px"}}/>
      </div>

      <div class="item">
        <img src="http://khazanamithai.com/wp-content/uploads/2019/11/slider-banner-1400-X-550_2.jpg" alt="Chicago" style={{width:"100%",height:"350px"}}/>
      </div>
    
      <div class="item">
        <img src="https://kanhasweetschirawa.com/wp-content/uploads/2019/09/1-1.jpg" alt="New york" style={{width:"100%",height:"350px"}}/>
      </div>
    </div>

   
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

  </div>
  </>
  )
}

export default Slidercomp