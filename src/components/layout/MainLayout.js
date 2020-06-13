import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaAngleUp } from "react-icons/fa"

// Components
import NavigationBar from "../../components/navigation"
import Footer from "../../components/footer"
import SocialFollowComponent from "../../components/socialFollowComponent"

// Bootstrap Components
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import "../css/bootstrap.css"


// Components

const MainLayout = ({ children }) => {
    return (
        <>
            <Container style={{ position: "relative" }} id="top" className="p-0" fluid>
                {/* Back to top button */}
                <Button
                    style={{ position: "fixed", bottom: 16, right: 16, zIndex: "99999" }} onClick={() => scrollTo("#top")}
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