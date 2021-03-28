import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import { FaRegMoneyBillAlt, FaBookReader, FaFileAlt} from 'react-icons/fa';
import {GrDocumentVerified} from 'react-icons/gr';
import {IoSchoolSharp} from 'react-icons/io5';
import { IconContext } from "react-icons";
import Fade from "react-reveal/Fade";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
  
const Styles = styled.div`

	.fale_conosco_form{
		margin-top: 50px;
		border-style: dashed;
		border-color: #0e56aa;
		border-radius: 5px;
		border-width: large;

		.form{
			padding: 20px;
			text-align: left;
			.btn{
				background-color: #0e56aa;
			}
		}
		
		.form-row{
			width: 100%;

		}
		.form-group{
			
			text-align: left;
		}
		
	}

`;



export const FaleConosco= () => (
  <Styles id="fale_conosco">
 



  <br/>
  <br/>
  <h1>Fale Conosco </h1>
  <div className="container fale_conosco_form">
			  <Form className="form">
					  <Form.Row>
					    <Form.Group as={Col} controlId="formGridEmail">
					      <Form.Label>NOME</Form.Label>
					      <Form.Control type="text" placeholder="Escreva seu nome e sobrenome" />
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridPassword">
					      <Form.Label>TELEFONE</Form.Label>
					      <Form.Control type="phone" placeholder="Escreva seu celular/telefone" />
					    </Form.Group>
					  </Form.Row>


					  <Form.Group controlId="formGridAddress1">
					    <Form.Label>EMAIL</Form.Label>
					    <Form.Control type="email" placeholder="Ex: joao@gmail.com" />
					  </Form.Group>

					  <Form.Group controlId="formGridAddress2">
					    <Form.Label>MENSAGEM</Form.Label>
					    <Form.Control as="textarea"/>
					  </Form.Group>


					  <Button variant="success" type="submit">
					    Enviar
					  </Button>


				</Form>
	</div>
	<br />
	<br />

  </Styles>
)
