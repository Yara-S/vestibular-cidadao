import React from 'react';
import styled from 'styled-components';



  
const Styles = styled.div`

  margin-top: 1rem;
  padding: 1rem;
  background-color: #0e56aa;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  display: flex;
  justify-content: flex-end;

  height: 100px;

  img{ 
      height: 90px;
      width: 100px;
      padding-right: 20px;
      padding-bottom: 10px;

  }

  div{
    padding-right: 20px;
    font-size: 0.8rem;
  }

  p{
    padding: 5px;
  }

`;



export const Footer = () => (
  <Styles>
    <div>
      <div> Rua do Hospicio, 619, Boa Vista - Recife/PE </div>
      <div> (81)0000-0000 </div>
      <div> contato@vestibularcidadao.com </div>
    </div>
    <img src='logo.png'/>
  </Styles>
)