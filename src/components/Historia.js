import React from "react"
import Fade from "react-reveal/Fade"
import styled from 'styled-components';




const Allcontent = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
 
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    

  }

    .content {
      
      text-align: left
      padding-left: 20px;
      width: 70%;
        @media screen and (max-width: 700px) {
          width: 100%;
        }

    }


    p {
      padding-top: 10px;
      text-align: left;
      font-size: 1.5rem;

      @media screen and (max-width: 700px) {
        text-align: center;
      }
    }
  }



  .image-wrapper {

    
    

    @media screen and (max-width: 700px) {
      width: 100%;
      display: flex;
      
      img{
        max-width: 100%;
    
      }
      
    }

  }

    `

const AboutSection = styled.div`
height: auto;
  margin-top: 100px;

  margin-right: 50px;
      h1 {
      font-size: 3rem;
      line-height: 20px;
      text-align: left;
      padding-bottom: 10px;
      padding-left: 10px;
      @media screen and (max-width: 700px) {
        text-align: center;
        font-size: 2rem;
      }
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

