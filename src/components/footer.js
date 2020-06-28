import React from "react"
import { Link } from "gatsby"

// Components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Logo
import LogoImage from "./images/logoImage"

const Footer = () => {
    const currYear = new Date().getFullYear()
    console.log(currYear)
    return (
        <Container fluid className="bg-dark text-light p-3">
            <Container>
                <Row className="py-5">
                    <Col className="my-3" xs={12} md={4}>
                        <LogoImage />
                    </Col>
                    <Col className="my-3" xs={12} md={4}>
                        <h5>Enlaces</h5>
                        <ul className="pl-1" style={{ listStyle: "none" }}>
                            <li><Link to="/preguntas">Jesús</Link></li>
                            <li><Link to="/estudios">Estudios</Link></li>
                            <li><Link to="/devocionales">Reflexiones</Link></li>
                            <li><Link to="/todos">Todas las entradas</Link></li>
                        </ul>
                    </Col>

                    <Col className="my-3" xs={12} md={4}>
                        <h5>Contacto y seguridad</h5>
                        <ul className="pl-1" style={{ listStyle: "none" }}>
                            <li><Link to="/preguntas">Contacto</Link></li>
                            <li><Link to="/privacidad">Uso y Privacidad</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <h5>Fruto del Espíritu</h5>
                <p>&copy; TODOS LOS DERECHOS RESERVADOS {currYear}</p>
            </Container>
        </Container>
    )
}

export default Footer