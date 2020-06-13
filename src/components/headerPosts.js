import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"


const HeaderPost = ({ title, paragraph }) => {

    return (

        <Jumbotron className="m-0">
            <Container>
                <h1>{title}</h1>
                <p className="lead" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            </Container>
        </Jumbotron>
    )

}

export default HeaderPost