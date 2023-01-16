import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return (
    <Topnav>
        HVG - (Hanumanthu Vamshi Gangadhar) TicTacToe using React.
    </Topnav>
  );
}

const Topnav = styled.p`
   background-color : #89C4E1;
   color : #1A0000;
   top : 0;
   left : 0;
   right : 0;
   margin-top : 0;
   text-align : center;
   height : 25px;
   font-weight : 25px;
   @media (max-width : 760px){
    height : 47px;
    font-size : 17px;
   }

`

export default Header;
