import React from "react"

// components
import HeaderNoBtn from "../components/headerNoBtn"
import MetaTags from "../components/metaTags"
import Timeline from "../components/jesuspage/timeline"

// layout
import MainLayout from "../components/layout/mainLayout"
import Introduction from "../components/jesuspage/introduction"

// bootstrap components
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

// components
import PostCategories from "../components/categories"
import RecentPosts from "../components/recentPosts"

const JesusPage = () => {
    return (
        <>
            <MetaTags
                title="Fruto del Espíritu - Cronología sobre la vida de Jesús"
                description="Aprende sobre la vida de Jesús, un ser maravilloso que entregó su vida a causa de la justicia y el amor de Dios."
                keywords="Aprende sobre la vida de Jesús, la vida de Jesús, la vida de jesus, cronología de la vida de jesús"
            />
            <MainLayout>
                <HeaderNoBtn
                    title="¿Quién era Jesús?"
                    paragraph="Porque de tal manera, amó Dios al mundo que ha dado a su hijo unigénito, para que todo aquel que en El crea, no se pierda, mas tenga vida eterna."
                    reference="Juan 3.16"
                />
                <Container>
                    <Introduction />
                    <Row>
                        <Col xs={12} lg={8}>
                            <Timeline />
                        </Col>
                        <Col xs={12} lg={4}>
                            <PostCategories />
                            <RecentPosts />
                        </Col>
                    </Row>
                </Container>
            </MainLayout>
        </>
    )
}

export default JesusPage