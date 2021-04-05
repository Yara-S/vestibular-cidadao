import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import Fade from "react-reveal/Fade"

  
const Styles = styled.div`




 .carousel {
  height: 100%;
 }

 .carousel-item{

 	height: 400px;;
 	background-color: #0e56aa;



 	p, ul{
 		padding-left: 35%;
 		padding-right: 35%;
 		font-size:1.5rem;
 		color: #fff

    @media screen and (max-width: 700px) {
      padding-left: 20%;
      padding-right: 20%;
      font-size: 1rem;

    }
 	}
 	p{
 		text-align: center;
 	}
 	ul{
 		text-align: left;
 	}

 	h2 {
 		color: #fff;
 		padding-top: 20px;
 	}
 	
 }

`;





export const Valores = () => (
  <Styles>
  		<br/>
  	<Fade right>
      <Carousel>
      	<Carousel.Item> 
      
      		<h2> Missão </h2>
      		<br/>
      		<p> Oportunizar aos alunos de escolas públicas e bolsistas de escolas privadas, através de um ensino de qualidade, o aprendizado necessário para participarem do 
      		processo seletivo do Vestibular, a fim de que possam ingressar nas universidade públicas ou privadas do país </p>


       </Carousel.Item>
       <Carousel.Item> 
      
      		<h2> Visão </h2>
      		<br/>
      		<p> Ser uma instituição de ensino voltada para a excelência pedagogica e reconhecida por promover um ingresso dos alunos de escolas públicas e bolsistas
      		de escolas privadas às universidade brasileiras </p>


       </Carousel.Item>
       <Carousel.Item> 
      
      		<h2> Valores </h2>
      		<br/>
      		<ul>
      			<li> Educação de qualidade; </li>
      			<li> Compromisso com a produção de conhecimento;</li>
      			<li> Ética;</li>
      			<li> Cidadania;</li>
      			<li> Respeito as diferenças </li>

      		</ul>


       </Carousel.Item>
      

      </Carousel>
      </Fade>
  </Styles>
)