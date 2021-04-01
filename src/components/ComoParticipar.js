import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import { FaRegMoneyBillAlt, FaBookReader, FaFileAlt} from 'react-icons/fa';
import {GrDocumentVerified} from 'react-icons/gr';
import {IoSchoolSharp} from 'react-icons/io5';
import { IconContext } from "react-icons";
import Fade from "react-reveal/Fade";
  
const Styles = styled.div`

background-color: #43d690;


#servicos  {
	p {
		font-size: 1rem;

	}
	h1 {
		text-align: center;
		
	}
	.col-md-10{
		text-align: center;
	}
	.col-md-6{
		
	}
	.estudantes{
		background-color: #0e56aa;
		color: white;
	}

}

`;

const data_estudantes = [{
            "icon": <IoSchoolSharp />,
            "title": " Aluno de Rede Pública",
            "text": "Para participar do Vestibular Cidadão o aluno deve ter concluído ou ainda estar matriculado no terceiro ano do ensino médio em uma escola da Rede Pública de Ensino"
        },
        {
            "icon": <FaBookReader />,
            "title": "Bolsista",
            "text": "Bolsistas são aceitos, porém, a inscrição só é aceita mediante comprovação de bolsistas 100%"
        },
        {
            "icon": <FaRegMoneyBillAlt />,
            "title": "Taxa",
            "text": "SIM, existe a taxa de R$20,00 que o candidato paga na inscrição. O curso é totalmente gratuito, existe a cobrança desta taxa para realização do processo seletivo."
        },
        {
            "icon": <FaFileAlt/>,
            "title": "Documentos",
            "text": ""
        }
        ];


const data_voluntarios = [{
            "icon": <IoSchoolSharp />,
            "title": "A",
            "text": "texto a ser inserido"
        },
        {
            "icon": <FaBookReader />,
            "title": "B",
            "text": "texto a ser inserido"
        },
        {
            "icon": <FaRegMoneyBillAlt />,
            "title": "C",
            "text": "texto a ser inserido"
        },
        {
            "icon": <FaFileAlt/>,
            "title": "D",
            "text": "texto as er inseridp"
        }
        ];


export const ComoParticipar = () => (
  <Styles>
  <Fade top>
  <h1>Como Participar</h1>
  <br/>
  <br/>
  </Fade>
  <Fade left>
					  <div id="servicos" className="text-center">
					        <div className="container">
					          <div className="estudantes">
					            <h2>Estudantes</h2>
					          </div>
					          <div className="row">
					            {data_estudantes
					              ? data_estudantes.map((d,i) => (
					                  <div  key={`${d.title}-${i}`} className="col-xs-12 col-md-6">
					                  	<IconContext.Provider value={{ color: "#0e56aa" , size: '4em', className: 'react-icons'}}> 
					                    {d.icon}
					                    </IconContext.Provider>
					                    <h3>{d.title}</h3>
					                    <p>{d.text}</p>
					                    
					                    
					                  </div>
					                ))
					              : "Carregando..."}
					          </div>
					        </div>
					      </div>
    </Fade>


  <Fade right>
						  <div id="servicos" className="text-center">
						        <div className="container">
						          <div className="estudantes">
						            <h2>Voluntários</h2>
						          </div>
						          <div className="row">
						            {data_voluntarios
						              ? data_voluntarios.map((d,i) => (
						                  <div  key={`${d.title}-${i}`} className="col-xs-12 col-md-6">
						                  	<IconContext.Provider value={{ color: "#0e56aa" , size: '4em', className: 'react-icons'}}> 
						                    {d.icon}
						                    </IconContext.Provider>
						                    <h3>{d.title}</h3>
						                    <p>{d.text}</p>
						                    
						                    
						                  </div>
						                ))
						              : "Carregando..."}
						          </div>
						        </div>
						      </div>
						      <br/>
						      <br/>
   </Fade>

  </Styles>
)
