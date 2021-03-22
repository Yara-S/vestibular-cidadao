import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'


  
const Styles = styled.div`
width: 100%;
height: auto;

`;


export const ComoParticipar = () => (
  <Styles>

  <div className='estudantes'>
  	<Card className="mb-2" bg='primary'>
  		<Card.Header> Aluno de Rede Pública </Card.Header>
  		<Card.Body>
  			<Card.Title>
  				Para participar do Vestibular Cidadão o aluno deve ter concluído ou ainda estar matriculado no terceiro 
  			</Card.Title>

  		</Card.Body>
  	</Card>
  </div>

  </Styles>
)