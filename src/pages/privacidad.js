import React from "react"

// meta tags
import MetaTags from "../components/metaTags"

// components
import MainLayout from "../components/layout/mainLayout"
import HeaderNoBtn from "../components/headerNoBtn"

// bootstrap components
import Container from "react-bootstrap/Container"

class Privacidad extends React.Component {

    render() {

        return (
            <>

                <MetaTags title="Fruto del Espíritu - Preguntas y respuestas sobre la biblia" />
                <MainLayout>
                    <HeaderNoBtn
                        title="Política de uso y privacidad"
                        paragraph="Si tienes preguntas sobre nuestra política de uso y privacidad, continúa leyendo."
                    />

                    <Container>

                        <div className="mx-auto p-3">
                            <ul className="ml-2">
                                <li>
                                    Usted puede usar este sitio con el propósito de aprender la biblia para ayudarle a crecer en fe conforme al carácter de Jesucristo.
                                </li>
                                <li>
                                    La información que colectamos como preguntas la utilizamos únicamente para aprender de sus dudas e inquietudes.  Mensajes que consideremos ataques personales o faltas de respeto no serán recibidos ni contestados, solo ignorados.
                                </li>
                                <li>
                                    Usted tiene el derecho de utilizar este servicio, así como dejar de utilizarlo a criterio propio.
                                </li>
                                <li>
                                    Las suscripciones por correo electrónico las manejamos usando el servicio de Mail Chimp, puede visitar su sitio para información sobre el manejo de su data.
                                </li>
                                <li>
                                    Nosotros tenemos la responsabilidad y el compromiso firme de no
                                    compartir la información colectada solo para el uso indicado.
                                </li>
                                <li>
                                    Usted puede solicitar en cualquier momento que deshagamos la
                                    información provista.
                                </li>
                            </ul>

                            <p>
                                Si usted tiene alguna pregunta puede comunicarse con nosotros a
                                oprimiento <a href="/preguntas">este enlace</a>.
                            </p>
                        </div>
                    </Container>
                </MainLayout>
            </>
        )
    }
}

export default Privacidad