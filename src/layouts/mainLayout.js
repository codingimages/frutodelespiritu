import React from "react"

import NavigationBar from "../components/navigation"
import Container from "react-bootstrap/Container"
import Footer from "../components/footer"

import "../components/css/bootstrap.css"


// Components

const MainLayout = ({ children }) => {
    return (
        <>
            <Container className="p-0" fluid>
                <NavigationBar />
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default MainLayout