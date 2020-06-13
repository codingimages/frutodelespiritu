import React from "react"

// bootstrap components
import Container from "react-bootstrap/Container"

// fontawesome icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const SocialShareComponent = () => {
    return (
        <Container style={{ fontSize: 24 }} className="p-1 bg-light border border-secondary" fluid>
            <Container className="d-flex align-items-center justify-content-end  ">

                <p style={{ fontSize: 16 }} className="m-0">Síguenos:</p>

                <a href="https://facebook.com/frutodelespiritu" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF
                        style={{ color: "#4267B2", marginLeft: 16 }}
                    />
                </a>

                <a href="https://twitter.com/frutodeles" target="_blank" rel="noopener noreferrer">
                    <FaTwitter
                        style={{ color: "#1DA1F2", marginLeft: 16 }}
                    />
                </a>

                <a href="https://www.linkedin.com/company/fruto-del-espiritu" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn
                        style={{ color: "#2867B2", marginLeft: 16 }}
                    />
                </a>

                <a href="https://www.instagram.com/frutodeles" target="_blank" rel="noopener noreferrer">
                    <FaInstagram
                        style={{ color: "#C13584", marginLeft: 16 }}
                    />
                </a>
            </Container>
        </Container>
    )
}

export default SocialShareComponent