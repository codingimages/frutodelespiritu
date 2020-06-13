import React from "react"
import MetaTags from "../components/metaTags"
import { Link } from "gatsby"
import Moment from "react-moment"
import 'moment/locale/es';

// components
import HeaderNoBtn from "../components/headerNoBtn"
import useEstudios from "../hooks/useEstudios"
import { FaUser, FaClock } from "react-icons/fa"
import Categories from "../components/categories"
import MailSignUp from "../components/MailSignUp"
import RecentPosts from "../components/recentPosts"
import SocialShareComponent from "../components/socialShareComponent"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// layout
import MainLayout from "../components/layout/mainLayout"

// style
import styled from "@emotion/styled"

const Input = styled.input`
    height: calc(1.5em + .75rem + 1.5px);
    width: 75%;
    margin: 0 auto 1rem;
    padding: .375rem .75rem;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    color: #000;
    
    :focus {
        border-color: #4d016b;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`

const EstudiosPage = () => {

    const allEstudios = useEstudios()

    // search function start
    const [estudios, setEstudios] = React.useState(allEstudios);

    const handleBuscar = e => {
        const query = e.target.value

        const filtradoEstudios = allEstudios.filter(estudio => {
            const { title, excerpt } = estudio
            return (
                title.toLowerCase().includes(query.toLowerCase()) || excerpt.toLowerCase().includes(query.toLowerCase())
            )
        })
        setEstudios(filtradoEstudios)
    }

    return (
        <>
            <MetaTags
                title="Fruto del Espíritu - Estudios bíblicos a tu alcance"
                description="Estudios bíblicos gratis, aprende temas de las sagradas escrituras para tu crecimiento espritual."
                keywords="Estudios biblicos, clases biblicas, estudios biblicos gratis"
            />
            <MainLayout>
                <HeaderNoBtn
                    title="Estudios Bíblicos"
                    paragraph="Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí; y no queréis venir a mí para que tengáis vida. Gloria de los hombres no recibo." reference="Juan 5.39-41"
                />
                <Container className="py-5">
                    <Row>
                        {/* Content */}
                        <Col sm={12} lg={8}>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h3 className="mx-auto">Elige un tema de estudio</h3>
                                <Input type="text" aria-label="Buscar" onChange={handleBuscar} placeholder="Buscar estudios bíblicos" />
                            </div>
                            {estudios.map(post => {
                                return <div
                                    key={post.id}
                                    className="d-flex flex-column border border-gray rounded p-2 my-3"
                                >
                                    <Link
                                        className="text-decoration-none"
                                        to={`/${post.title}`}
                                    >
                                        <h4>{post.title}</h4>
                                        <div style={{ fontSize: 14 }} className="d-flex text-secondary">
                                            <div className="post-info d-flex align-items-center mr-3">
                                                <FaUser className="mr-2" />
                                                <p className="m-0">{post.author}</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <FaClock className="mr-2" />
                                                <p className="m-0 mr-1">Publicado</p>
                                                <Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div className="text-dark my-2" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    </Link>
                                </div>
                            })}
                            <SocialShareComponent />
                        </Col>
                        <Col xs={12} lg={4}>
                            <Categories />
                            <RecentPosts />
                        </Col>
                    </Row>
                </Container>
                <MailSignUp />
            </MainLayout>
        </>
    )
}

export default EstudiosPage