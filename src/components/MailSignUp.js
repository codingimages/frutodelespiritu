import React from "react"

// Icons
import { FaEnvelope } from "react-icons/fa"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const MailSignUp = () => {
    return (
        <>
            <Container className="py-5 bg-light" fluid>
                <Container>
                    <Row >
                        <Col className="mb-2" sm={12}>
                            <h2 className="m-0 text-center">Contenido Gratis</h2>
                        </Col>
                        <Col className="mt-2 d-flex align-items-center justify-content-center" sm={12}>
                            <a className="text-uppercase text-light d-flex align-items-center border border-success p-2 rounded bg-success" href="https://frutodelespiritu.us10.list-manage.com/subscribe?u=880da2e1d210b0ffbeb0183c2&id=377c460b69">
                                <FaEnvelope style={{ fontSize: 32 }} className="my-auto mr-3" />
                                <p className="m-0">Suscribirme</p>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default MailSignUp