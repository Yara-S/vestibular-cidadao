import React from 'react';
import styled from 'styled-components';
import { FaChalkboardTeacher, FaFileSignature, FaReact, FaCogs, FaFontAwesomeFlag, FaCalendarAlt, FaUserClock, FaDesktop} from 'react-icons/fa';

import { IconContext } from "react-icons";
import Fade from "react-reveal/Fade"

  
const Styles = styled.div`
  margin-top: 50px;

  p {
    padding-left: 20px;

  }
  .container-oq-a{
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 700px){
      justify-content: center;
    }
  }

  .dif {
    padding-top: 20px;
    background-color: #0e56aa;
    width: 70%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 700px) {
      
        width: 100%;
        flex-direction: column
       
    }

    ul{
      text-align: left;
      padding-right: 20px;
      @media screen and (max-width: 700px){
        text-align: center;
      }
    }
    ul, p {
      font-size: 1.2rem;
      color: white;
    }
    li{
      padding-bottom: 10px;
    }
    .icon-d{

      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        text-align: center;
        font-size: 2rem;
        padding-right: 20px;
      }
    }






  }
  .aulas {
    padding-top: 20px;
    background-color: #0e56aa;
    width: 70%
    display: flex;
    justify-content: space-around;

      @media screen and (max-width: 700px) {
      
        width: 100%;
        flex-direction: column;
       
    }





    .text-a{
      p{
        text-align: center;
        font-size: 1.2rem;
        color: white;
      }
    }
  }

  .materias{
    padding-top: 20px;
    background-color: #43d690;
    width: 70%;
    display: flex;
    justify-content: center;

      @media screen and (max-width: 700px) {
      
        width: 100%;
        flex-direction: column
        justify-content: center;
    }

    ul{
      text-align: left;
      padding-right: 20px;

      @media screen and (max-width: 700px){
        text-align: center;
      }


    }
    ul, p {
      font-size: 1.2rem;
    }
    li{
      padding-bottom: 10px;
    }

    .icon-m {
      margin-top: 10px;
      width: 100%
      display: flex;
      justify-content: space-around;
  
    }
    .text-m{
      width: 70%;
      @media screen and (max-width: 700px){
        width: auto;
      }

    }

    .react-icons{
    padding: 20px;

    }

    .icon-mo {
  
      width: 30%
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      @media screen and (max-width: 700px){
        
        width: 100%;
      }

      p {
        font-size: 1.5rem;
        padding: 0px;

      }

      .react-icons{
        padding: 0px;

      }
    }


  }



`;





export const OQueFazemos = () => (
  <Styles>
    <Fade top>

    <h2> O QUE ACREDITAMOS E FAZEMOS </h2>
    <p> Pretendemos preparar os diversos estudantes para o difícil processo seletivo das Universidades (ENEM, SSA e Afins). Todavia, o Vestibular Cidadão é mais que um cursinho:
    é uma "oficina de cidadãos", um espaço de formação de jovens conscientes, solidarios, politizados e mais comprometidos com o futuro, com objetivo em comum de ensinar
    e aprender coletivamente. </p>
    <p> Portanto, o Vestibular Cidadão tem por propósito concatenar inclusão social com consciência de participação </p> 

    </Fade>

    <Fade left>

      <div className='container-oq-m'>
      <div className="materias">
          <div className='icon-m'>
              <IconContext.Provider value={{ color: "#0e56aa" , size: '8em', className: 'react-icons'}}> 
              <FaChalkboardTeacher />
              <FaFileSignature />
              <FaReact />
              <FaCogs />
              </IconContext.Provider>
          </div>

          <div className="text-m">
            <ul>
              <li> Linguagens, códigos e suas tecnologias </li>
              <li> Ciências humanas e suas tecnologias </li>
              <li> Ciências da Natureza e suas tecnologias </li>
              <li> Matemática e suas tecnologias </li>
              <li> Redação </li>
            </ul>
          </div>
      </div>
      </div>

    </Fade>
    <br />
    <br />

    <Fade right>

      <div className='container-oq-a'>
      <div className="aulas">
            <div className="duracao">
                        <div className='icon-a'>
                            <IconContext.Provider value={{ color: "#43d690" , size: '4em', className: 'react-icons'}}> 
                            <FaFontAwesomeFlag />
                            </IconContext.Provider>
                        </div>
                        <div className="text-a">
                          <p> INICIO/DURAÇÃO <br/>
                          Março à Novembro </p>
                        </div>
            </div>


            <div className="crono">
                        <div className='icon-a'>
                            <IconContext.Provider value={{ color: "#43d690" , size: '4em', className: 'react-icons'}}> 
                            <FaCalendarAlt />
                            </IconContext.Provider>
                        </div>
                        <div className="text-a">
                          <p> CRONOGRAMA <br/>
                          Aulas até agosto. <br/> Aulões e simualdos a partir de Setembro</p>
                        </div>
            </div>



            <div className="horario">
                        <div className='icon-a'>
                            <IconContext.Provider value={{ color: "#43d690" , size: '4em', className: 'react-icons'}}> 
                            <FaUserClock />
                            </IconContext.Provider>
                        </div>
                        <div className="text-a">
                          <p>HORÁRIO DE FUNCIONAMENTO <br/>
                          Segunda à Sabado. <br/> Das 13hrs às 18hrs</p>
                        </div>
            </div>








      </div>
      </div>

    </Fade>
    <br/>
    <br/>

    <Fade left>

      <div className='container-oq-m'>
      <div className="materias">
          <div className='icon-mo'>
              <p>MONITORIA</p>
              <IconContext.Provider value={{ color: "white" , size: '6em', className: 'react-icons'}}> 
              <FaDesktop />
              </IconContext.Provider>
          </div>

          <div className="text-m">
          <br/>
            <ul>
              <li> Acompanhar o desenvolvimento e adaptação estudantil aos conteúdos trabalhados </li>
              <li> Auxilio na manutenção e organização da rotina do estudante</li>
              <li> Auxílio com dúvidas e resoluções de questões </li>
            </ul>
          </div>
      </div>
      </div>

    </Fade>

    <br/>
    <br/>


    <Fade right>

      <div className='container-oq-a' id="como_participar">
      <div className="dif">
          <div className='icon-d'>
              <p>DIFERENCIAIS</p>
          </div>

          <div className="text-m">
          <br/>
            <ul>
              <li>20 anos de experiência e atuação;</li>
              <li> Material didático incluso e com conteúdo selecionado com os assuntos que mais caem no vestibular e no ENEM;</li>
              <li> Taxa de aprovação mais que 60% todos os anos; </li>
              <li> Acompanhamento psicopedagogo;</li>
              <li> Aulas interdisciplinares; </li>
            </ul>
          </div>
      </div>
      </div>

    </Fade>
    <br />
    <br />

  		

  </Styles>
)