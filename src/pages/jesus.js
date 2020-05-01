import React from "react"

// components
import HeaderNoBtn from "../components/HeaderNoBtn"
import MetaTags from "../components/metaTags"
import Timeline from "../components/jesuspage/Timeline"

// layout
import MainLayout from "../layouts/mainLayout"
import Introduction from "../components/jesuspage/Introduction"

// bootstrap components
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

// components
import Categories from "../components/categories"
import RecentPosts from "../components/recentPosts"

const JesusPage = () => {
    return (
        <>
            <MetaTags title="Fruto del Espíritu - Cronología sobre la vida de Jesús" />
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
                            <Categories />
                            <RecentPosts />
                        </Col>
                    </Row>
                </Container>
            </MainLayout>
        </>
    )
}

export default JesusPage