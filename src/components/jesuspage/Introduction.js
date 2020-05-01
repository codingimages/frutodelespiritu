import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// images
import JesusEmptyCross from "../images/jesusEmptyCrossImage"

const TimeLineLeft = () => {
    return (
        <Container className="py-5" fluid>
            <Container>
                <Row className="py-3">
                    <Col xs={12} md={8} lg={6} className="my-auto text-center">
                        <h2 className="mx-auto mb-3">Aprende de la vida un ser extraordinariamente maravilloso</h2>
                        <h3 className="mx-auto mt-3 my-3">Cronología de una resurrección no imaginada</h3>
                    </Col>
                    <Col xs={12} md={4} lg={6} className="d-flex align-items-center justify-content-center">
                        <JesusEmptyCross />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default TimeLineLeft