import React from "react"

// meta tags
import MetaTags from "../components/metaTags"

// components
import MainLayout from "../layouts/mainLayout"
import HeaderNoBtn from "../components/HeaderNoBtn"

const PreguntasPage = () => {
    return (
        <>

            <MetaTags title="Fruto del Espíritu - Preguntas y respuestas sobre la biblia" />
            <MainLayout>
                <HeaderNoBtn
                    title="¿Tienes Preguntas Sobre la Biblia?"
                    paragraph="Nos interesa ayudarte a entender la biblia, por lo tanto, si tienes preguntas o inquietudes al respecto, llena el formulario abajo para poder ayudarte."
                    reference="Leer Juan 5:39"
                />
            </MainLayout>
        </>
    )
}

export default PreguntasPage