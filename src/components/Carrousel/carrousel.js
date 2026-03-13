import React from 'react'
import "./carrousel.css"
import carouselImages from "./carrouselImages.js"

function Carrousel(){

return(

<section>
<div className="carruselportada">

<div id="myCarousel" className="carousel slide">

<div className="carousel-inner">

{carouselImages.map((slide,i)=>(

<div key={i} className={`item ${i===0?"active":""}`}>

<img
src={slide.img}
alt={`slide-${i}`}
className="carousel_img"
/>

</div>

))}

</div>

<a className="left carousel-control" href="#myCarousel" data-slide="prev">
<span className="glyphicon glyphicon-chevron-left"></span>
</a>

<a className="right carousel-control" href="#myCarousel" data-slide="next">
<span className="glyphicon glyphicon-chevron-right"></span>
</a>

</div>
</div>
</section>

)}

export default Carrousel