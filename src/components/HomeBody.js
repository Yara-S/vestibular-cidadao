import React from 'react';
import styled from 'styled-components';
import {QuemSomos} from './QuemSomos';
  
const Styles = styled.div`

  
  width: 100%;
  margin-top: 100px;
  height: auto;
  margin-right: 20px;
 


`;


export const HomeBody = () => (
  <Styles>
    
    <QuemSomos />
      
    
  </Styles>
)