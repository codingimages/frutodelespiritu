import React from "react"
import { Link } from "gatsby"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// icons
import { FaBookReader } from "react-icons/fa"

const StartReading = () => {
    return (
        <Container className="py-5" fluid>
            <Container>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center flex-wrap mb-2" xs={12}>
                        <FaBookReader className="mx-2 text-center" style={{ fontSize: 32 }} />
                        <h2 className="mx-2 text-center">Comienza leyendo</h2>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center flex-wrap" xs={12}>
                        <Link 
                            className="bg-primary p-2 rounded text-light mx-2 my-2 text-center" 
                            to="/jesus"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                            >Aprende de Jesús
                            
                        </Link>
                        <Link 
                            className="bg-primary p-2 rounded text-light mx-2 my-2 text-center" 
                            to="/devocionales"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-easing="ease"
                            >Vida Devocional
                            
                        </Link>
                        <Link 
                            className="bg-primary p-2 rounded text-light mx-2 my-2 text-center" 
                            to="/estudios"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >Estudios Bíblicos
                            
                        </Link>
                        <Link 
                            className="bg-primary p-2 rounded text-light mx-2 my-2 text-center" 
                            to="/noticias"
                            data-sal="slide-up"
                            data-sal-delay="400"
                            data-sal-easing="ease"
                            >Noticias Cristianas
                            
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default StartReading