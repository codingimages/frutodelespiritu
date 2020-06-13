import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const ErrorPageComponent = () => {
    return (
        <div className="error-page-component bg-danger text-light" fluid>
            <Container>
                <h1>La página solicitada no existe o fue removida</h1>
                <p className="lead my-3">
                    Regresa a la página de inicio o use la barra de navegación.
                </p>
                <Link to="/"><Button
                    variant="warning">Página de inicio</Button></Link>
            </Container>
        </div>
    )
}

export default ErrorPageComponent