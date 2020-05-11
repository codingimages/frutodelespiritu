import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"


const Header = ({ title, paragraph, reference }) => {

    return (

        <Jumbotron className="m-0">
            <Container>
                <h1>{title}</h1>
                <p className="lead">{paragraph}</p>
                <p className="font-weight-bold">{reference}</p>
            </Container>
        </Jumbotron>
    )

}

export default Header