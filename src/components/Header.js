import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

import { IconContext } from "react-icons";


const Styles = styled.div`
  

  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 100px;

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
    <IconContext.Provider value={{ color: "#43d690" , size: '4em', className: 'react-icons'}}>
    <FaFacebookSquare />
    <FaInstagramSquare />
    </IconContext.Provider>
    </div>

 
   
  </Styles>
)