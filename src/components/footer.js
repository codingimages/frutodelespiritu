import React from "react"

// Components
import Container from "react-bootstrap/Container"

const Footer = () => {
    const currYear = new Date().getFullYear()
    console.log(currYear)
    return (
        <Container fluid className="bg-dark text-light p-3 text-center">
            <Container >
                <h3>&copy; Fruto del Espíritu</h3>
                <p>TODOS LOS DERECHOS RESERVADOS {currYear}</p>
            </Container>
        </Container>
    )
}

export default Footer