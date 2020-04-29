import React from "react"
import { Link } from "gatsby"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"


const Header = ({ title, paragraph, reference, btnref, btntxt }) => {

    return (

        <Jumbotron className="m-0">
            <Container>
                <h1>{title}</h1>
                <p className="lead">{paragraph}</p>
                <p>{reference}</p>
                <Link className="btn btn-danger" to={btnref} variant="danger">{btntxt}</Link>
            </Container>
        </Jumbotron>
    )

}

export default Header