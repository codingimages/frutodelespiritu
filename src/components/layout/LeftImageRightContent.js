import React from "react"
import { Link } from "gatsby"
// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const LeftImageRightContent = ({ image, about, header, information, btnlink, btntxt }) => {
    return (
        <Container className="py-5 text-center" fluid>
            <Container>
                <Row>
                    <Col
                        className="my-auto"
                        xs={12} md={4}
                        data-sal="slide-up"
                        data-sal-easing="ease"
                    >
                        <div className="w-100 my-auto py-3">
                            {image}
                        </div>
                    </Col>
                    <Col
                        className="my-auto"
                        xs={12}
                        md={8}
                        data-sal="slide-up"
                        data-sal-easing="ease"
                        data-sal-delay="100"
                    >
                        <h3 className="text-primary text-uppercase">{header}</h3>
                        <p className="lead">{information}</p>
                        <Link to={btnlink} className="btn btn-primary">{btntxt}</Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default LeftImageRightContent