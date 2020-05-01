import React from "react"
import { Link } from "gatsby"

// Icons
import { FaCross, FaBookMedical, FaPray, FaQuestionCircle, FaHome } from "react-icons/fa"

// Logo
import Logo from "../images/logo.png"

// Bootstrap components
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" activeClassName="active">
                    <img
                        alt="logo del sitio"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Fruto del Espíritu
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link
                            className="nav-link my-3 ml-1 mr-3 mx-auto align-items-center justify-content-center d-flex"
                            activeClassName="active"
                            to="/">
                            <FaHome className="mr-1" />
                            Inicio
                        </Link>
                        <Link
                            className="nav-link my-3 ml-1 mr-3 mx-auto align-items-center justify-content-center d-flex"
                            activeClassName="active"
                            to="/jesus">
                            <FaCross className="mr-1" />
                            Vida de Jesús
                        </Link>

                        <Link
                            className="nav-link my-3 ml-1 mr-3 mx-auto align-items-center justify-content-center d-flex"
                            activeClassName="active"
                            to="/estudios">
                            <FaBookMedical className="mr-1" />
                            Estudios Bíblicos
                        </Link>

                        <Link
                            className="nav-link my-3 ml-1 mr-3 mx-auto align-items-center justify-content-center d-flex align-items-center justify-content-center d-flex"
                            activeClassName="active"
                            to="/devocionales">
                            <FaPray className="mr-1" />
                            Reflexiones
                        </Link>

                        {/* <Link
                            className="nav-link my-3 ml-1 mr-3 mx-auto"
                            activeClassName="active"
                            to="/noticias">
                            <FaNewspaper className="mr-1" />
                            Noticias
                        </Link> */}

                        <Link
                            className="nav-link my-3 ml-1 mr-3 mx-auto"
                            activeClassName="active"
                            to="/preguntas">
                            <FaQuestionCircle className="mr-1" />
                            Preguntas
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation