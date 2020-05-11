import React, {Component}from "react"
import MetaTags from "../components/MetaTags"

// components
import HeaderBtn from "../components/HeaderBtn"
import MailSignUp from "../components/MailSignUp"
import StartReading from "../components/layout/StartReading"
import LeftImageRightContent from "../components/layout/LeftImageRightContent"
import LeftContentRightImage from "../components/layout/LeftContentRightImage"
import SocialShareComponent from "../components/SocialShareComponent"

// image components
import BibleHeartImage from "../components/images/bibleHeartImage"
import EstudiosImage from "../components/images/estudiosImage"
import DevocionalesImage from "../components/images/devocionalesImage"

// layout
import MainLayout from "../components/layout/MainLayout"
import Container from "react-bootstrap/Container"


class IndexPage extends Component{

  render(){
    return(
        <>
          <MetaTags 
            title="Fruto del Espíritu - Aprende sobre la vida de Jesús, reflexiones y estudios bíblicos.  Ejercita tu fe."
            description="Fruto del Espíritu es un ministerio en línea cuya misión es enseñar la palabra de Dios, ayudarte a entenderla y ejercitar la fe que agrada a Dios."
            keywords="Fruto del Espíritu, fruto del espiritu, el fruto del espiritu, los frutos del espiritu, aprende la biblia"
          />
          <MainLayout>
          <HeaderBtn
            title="¡Jesucristo Vive y Reina!" 
            paragraph = "Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras  "
            reference="1 Corintios 15.3-4"
            btnref="/jesus"
            btntxt="¿Quién es Jesús?"  
          />
          <StartReading/>
          <MailSignUp/>
          <LeftImageRightContent
            image={<BibleHeartImage/>}
            header="La vida de un salvador"
            information="En esta sección estudiamos la vida de Jesús desde todos los ángulos.  El Dios, el hombre, el hijo, el salvador, etc."
            btnlink="/jesus"
            btntxt="Aprende más"
          />
          <LeftContentRightImage
            image={<EstudiosImage/>}
            header="Estudios bíblicos con referencias"
            information="Nuestros estudios bíblicos abarcan toda clase de temas, no solo nos enfocamos en la historia, sino en temas como el fruto del espíritu, el amor, etc."
            btnlink="/estudios"
            btntxt="Aprende más"
          />
          <LeftImageRightContent
            image={<DevocionalesImage/>}
            header="Reflexiona con preguntas guías"
            information="La seccion de reflexiones nos ayuda a estudiar la palabra sobre porciones bíblicas y nos ayuda a entender como aplicarlas en nuestra vida con preguntas y oraciones guías."
            btnlink="/devocionales"
            btntxt="Aprende más"
          />
          <Container>
            <SocialShareComponent/>
          </Container>
          </MainLayout>
        </>
      )
  }
}

export default IndexPage
