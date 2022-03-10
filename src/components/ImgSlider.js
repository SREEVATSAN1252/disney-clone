import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
  let settings = {
    dots: true,
    infinite:true,
    speed:10000,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
  }
 return <Carousel{...settings}>
  <Wrap>
    <img src="/images/slider-scale.jpg"/></Wrap>
    <Wrap> <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"/></Wrap>
    <Wrap> <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"/></Wrap>
    <Wrap> <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"/>
  </Wrap>

 </Carousel>;
}

export default ImgSlider;
const Carousel = styled(Slider)`
margin-top:20px;
.slick-list{overflow:visible}
button{z-index:1;}

`
const Wrap = styled.div`
img{
  border: 4px solid transparent;
  width:100%;
  height:100%;
  border-radius:20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor:pointer;
  transition-duration:1500ms;
  &:hover{
    border:4px solid rgba(249,249,249,0.8);
  }

  
`
