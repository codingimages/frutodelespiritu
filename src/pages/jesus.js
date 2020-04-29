import React from "react"

// components
import HeaderNoBtn from "../components/HeaderNoBtn"
import MetaTags from "../components/metaTags"

// layout
import MainLayout from "../layouts/mainLayout"

const JesusPage = () => {
    return (
        <>
            <MetaTags title="Fruto del Espíritu - Aprende sobre la vida de Jesús" />
            <MainLayout>
                <HeaderNoBtn
                    title="¿Quién era Jesús?"
                    paragraph="Porque de tal manera, amó Dios al mundo que ha dado a su hijo unigénito, para que todo aquel que en El crea, no se pierda, mas tenga vida eterna."
                    reference="Juan 3.16"
                />
            </MainLayout>
        </>
    )
}

export default JesusPage