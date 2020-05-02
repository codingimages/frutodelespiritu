import React from "react"

// meta tags
import MetaTags from "../components/metaTags"

// components
import MainLayout from "../layouts/mainLayout"
import HeaderNoBtn from "../components/HeaderNoBtn"
import SocialShareComponent from "../components/SocialShareComponent"

// bootstrap components
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class FormikCloudForm extends React.Component {

    state = {
        name: '',
        email: '',
        message: '',
        alert: null,
    }

    handleSubmit = () => {

        try {
            fetch('https://api.formik.com/submit/codingimages/fruto-del-espritu', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            })

            this.setState({
                alert: "Your message was sent successfuly"
            })

        } catch (error) {

            this.setState({
                alert: null
            })
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        return (
            <>

                <MetaTags title="Fruto del Espíritu - Preguntas y respuestas sobre la biblia" />
                <MainLayout>
                    <HeaderNoBtn
                        title="¿Tienes Preguntas Sobre la Biblia?"
                        paragraph="Nos interesa ayudarte a entender la biblia, por lo tanto, si tienes preguntas o inquietudes al respecto, llena el formulario abajo para poder ayudarte."
                        reference="Leer Juan 5:39"
                    />

                    <Container>

                        {this.state.alert !== null ? <div className="alert alert-success mt-5" role="alert">{this.state.alert}</div> : null}

                        <Form onSubmit={this.handleSubmit} className="w-75 mx-auto py-5">

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Pregunta</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="4"
                                    type="text"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                        <SocialShareComponent />
                    </Container>
                </MainLayout>
            </>
        )
    }
}

export default FormikCloudForm