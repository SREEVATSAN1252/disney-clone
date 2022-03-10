import React from 'react';
import styled from 'styled-components';

function Viewers() {
 return <Container>
  <Wrap>
<img src="../images/viewers-disney.png"/>
  </Wrap>
  <Wrap>
<img src="../images/viewers-marvel.png"/>
  </Wrap>
  <Wrap>
<img src="../images/viewers-national.png"/>
  </Wrap>
  <Wrap>
<img src="../images/viewers-pixar.png"/>
  </Wrap>
  <Wrap>
<img src="../images/viewers-starwars.png"/>
  </Wrap>
 </Container>;
}

export default Viewers;
const Container = styled.div`
margin-top:20px;
display:grid;
grid-gap:25px;
grid-template-columns: repeat(5, minmax(0,1fr));

`
const Wrap = styled.div`
border:3px solid rgba(249,249,249,0.1);
border-radius:20px;
margin-top:20px;
transition-duration:1500ms;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{
  width:100%;
  height:100%;

}
&:hover{
  border:4px solid rgba(249,249,249,0.8);
}

`