import React from 'react';
import styled from 'styled-components';

function Movies() {
 return <Container>
   <h1>
     Recommended for You
   </h1>
   <Content>

     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     <Wrap>
      <img src="../images/spiderman.jpg"/> 
     </Wrap>
     
     

   </Content>
 </Container>;
}

export default Movies;
const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:11px;
  
  cursor:pointer;
  
  
  &:hover{
    border:4px solid rgba(249,249,249,0.8);
    transition-duration:250ms;
  }
  
}
`