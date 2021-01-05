import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

import { IconContext } from "react-icons";


const Styles = styled.div`
  

  display: flex;
  justify-content: space-between;
  
  height: 150px;

  img{
    margin-left: 100px;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  div{
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 100px;
    display: flex;
    align-items: center;
  }

  .react-icons{
    padding: 10px;
  }



`;





export const Header = () => (

  <Styles>
    <img src='logo.png'/>
    <div>
    <IconContext.Provider value={{ color: "#43d690" , size: '6em', className: 'react-icons'}}>
    <FaFacebookSquare />
    <FaInstagramSquare />
    </IconContext.Provider>
    </div>

 
   
  </Styles>
)