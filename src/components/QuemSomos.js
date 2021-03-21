import React from 'react';
import styled from 'styled-components';
import {Historia} from './Historia';
import {Valores} from './Valores';

  
const Styles = styled.div`
width: 100%;
height: auto;

`;


export const QuemSomos = () => (
  <Styles>

      <Historia/>
      <Valores />

  </Styles>
)