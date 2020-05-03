import React from "react"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// import share api
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

// fontawesome icons
import { FaFacebookF, FaEnvelope, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"

// define url for build and development
const url = typeof window !== 'undefined' ? window.location.href : ''

const SocialShareComponent = () => {
    return (
        <Container className="my-5 py-5 bg-light border border-secondary" fluid>
            <Row>
                <h4 className="mx-auto mb-5">Comparte el buen conocimiento</h4>
            </Row>
            <Row style={{ fontSize: 32 }}>
                <Col>
                    <FacebookShareButton className="w-100" url={url}>
                        <FaFacebookF
                            style={{ color: "#4267B2" }}
                        />
                    </FacebookShareButton>
                </Col>

                <Col>
                    <WhatsappShareButton className="w-100" url={url}>
                        <FaWhatsapp
                            style={{ color: "#4AC959" }}
                        />
                    </WhatsappShareButton>
                </Col>

                <Col>
                    <TwitterShareButton className="w-100" url={url}>
                        <FaTwitter
                            style={{ color: "#1DA1F2" }}
                        />
                    </TwitterShareButton>
                </Col>

                <Col>
                    <LinkedinShareButton className="w-100" url={url}>
                        <FaLinkedinIn
                            style={{ color: "#2867B2" }}
                        />
                    </LinkedinShareButton>
                </Col>

                <Col>
                    <EmailShareButton className="w-100" url={url}>
                        <FaEnvelope
                            style={{ color: "#FF9900" }}
                        />
                    </EmailShareButton>
                </Col>
            </Row>
        </Container>
    )
}

export default SocialShareComponent