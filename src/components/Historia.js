import React from "react"
import Fade from "react-reveal/Fade"
import styled from 'styled-components';




const Allcontent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  @include media(">=phone", "<lgphone") {
    flex-direction: column-reverse;
  }
  @include media(">=lgphone", "<tablet") {
    flex-direction: column-reverse;
  }
  @include media(">=tablet", "<desktop") {
    flex-direction: column-reverse;

    .content {
      width: 70%;

      padding-right: 150px;


    @include media(">=phone", "<lgphone") {
      width: 100%;
    }
    @include media(">=lgphone", "<tablet") {
      width: 100%;
    }
    @include media(">=tablet", "<desktop") {
      width: 100%;
    }


    }
    p {
      padding-top: 10px;
      text-align: left;
      font-size: 1.5rem;

      @include media(">=tablet", "<desktop") {
        text-align: center;
      }
    }
  }
  .image-wrapper {
    width: 30%;

    display: flex;
    justify-content: flex-start;


    @include media(">=phone", "<lgphone") {
      width: 100%;
    }
    @include media(">=lgphone", "<tablet") {
      width: 100%;
    }
    @include media(">=tablet", "<desktop") {
      width: 100%;
    }
  }

    `

const AboutSection = styled.div`
height: auto;
  margin-top: 100px;
margin-left: 500px;
  margin-right: 50px;
      h1 {
      font-size: 3rem;
      line-height: 20px;
      text-align: left;
      padding-bottom: 10px;
      padding-left: 10px;
      @include media(">=tablet", "<desktop") {
        
      }

`



export const Historia = () => {
  return (
  
        <AboutSection >
            <Fade bottom cascade text>
              <h1>NOSSA HISTÓRIA</h1>
            

        <Allcontent>


        <div className="image-wrapper">
            <img src="https://cdn.usjt.br/app/uploads/2018/08/16161521/imagem7-mob.jpg" alt="about"></img>
          </div>


          <div className="content">
            
            <p>
              O projeto Vestibular Cidadão é uma extensão que nasceu no ano de 2000, pela Universidade Federal de Pernambuco, em formato de pré-academico.
              <br></br>
              <br></br>
              É, em sua essência, um curso voluntário pré-vestibular voltado para estudantes de escolas da rede pública de ensino, bem como ex-alunos de escolas da rede particular,
              desde que tenham sido contemplados com bolsa de estudos integral.

            </p>
          </div>


          </Allcontent>
          </Fade>
        </AboutSection>


  )
}

