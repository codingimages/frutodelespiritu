import React from "react"

import NavigationBar from "../components/navigation"
import Container from "react-bootstrap/Container"
import Footer from "../components/footer"
import Button from "react-bootstrap/Button"
import { FaAngleUp } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

import SocialFollowComponent from "../components/SocialFollowComponent"

import "../components/css/bootstrap.css"


// Components

const MainLayout = ({ children }) => {
    return (
        <>
            <Container style={{ position: "relative" }} id="top" className="p-0" fluid>
                {/* Back to top button */}
                <Button
                    style={{ position: "fixed", bottom: 16, right: 16 }} onClick={() => scrollTo("#top")}
                    data-sal="slide-left"
                    data-sal-easing="ease"
                >
                    <FaAngleUp
                        data-sal="slide-up"
                        data-sal-easing="ease"
                    />
                </Button>
                <SocialFollowComponent />
                <NavigationBar />
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default MainLayout