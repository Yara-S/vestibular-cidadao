import styled from 'styled-components';
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImageGallery from 'react-image-gallery';
import Fade from "react-reveal/Fade"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Styles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

  .imgHeader{
  	display: flex;
  	justify-content: center;
  }


  img {
  	width: 200px;
  	heigth: auto;
  	
  }

  h1{
  	color: white;
  	text-align: center;
  	padding-top: 10px;
  }

  .carrosel {
  	background-color: #43d690
  }

`;



export function Galeria() {


	return (

  <Styles>

  <Fade left>

  	<div className="imgHeader">
  	<img src='logo.png' />
  	</div>
    <div className="carrosel">
    	<h1> GALERIA </h1>
      <ImageGallery items={images} />
    </div>
   </Fade>
    
  </Styles>

  );



}


