import React from "react"
import MetaTags from "../components/metaTags"
import { Link } from "gatsby"
import Moment from "react-moment"
import 'moment/locale/es';


// components
import HeaderNoBtn from "../components/HeaderNoBtn"
import useDevocionales from "../hooks/useDevocionales"
import { FaUser, FaClock } from "react-icons/fa"
import Categories from "../components/categories"
import MailSignUp from "../components/MailSignUp"
import RecentPosts from "../components/recentPosts"
import SocialShareComponent from "../components/SocialShareComponent"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// layout
import MainLayout from "../layouts/mainLayout"

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

const DevocionalesPage = () => {

    const allDevocionales = useDevocionales()

    // search function start
    const [devocionales, setDevocionales] = React.useState(allDevocionales);

    const handleBuscar = e => {
        const query = e.target.value
        const filtradoDevocionales = allDevocionales.filter(devocional => {
            const { title, excerpt } = devocional
            return (
                title.toLowerCase().includes(query.toLowerCase()) || excerpt.toLowerCase().includes(query.toLowerCase())
            )
        })
        setDevocionales(filtradoDevocionales)
    }

    console.log(devocionales)
    // search function ends

    return (
        <>
            <MetaTags title="Fruto del Espíritu - Devocionales y reflexiones cristianas" />
            <MainLayout>
                <HeaderNoBtn
                    title="Reflexiones"
                    paragraph="Bienaventurado el varón que no anduvo en consejo de malos, Ni estuvo en camino de pecadores, Ni en silla de escarnecedores se ha sentado; Sino que en la ley de Jehová está su delicia, Y en su ley medita de día y de noche." reference="Salmo 1 1-2"
                />
                <Container className="py-5">
                    <Row>
                        <Col sm={12} lg={8}>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h3 className="mx-auto">Elige una reflexión</h3>
                                <Input type="text" aria-label="Buscar" onChange={handleBuscar} placeholder="Busca un tema de interés" />
                            </div>

                            {devocionales.map(devocional => {
                                return <div
                                    key={devocional.id}
                                    className="d-flex flex-column border border-gray rounded p-2 my-3"
                                >
                                    <Link
                                        className="text-decoration-none"
                                        to={`/post/${devocional.title}`}
                                    >
                                        <h4>{devocional.title}</h4>
                                        <div className="d-flex text-dark">
                                            <div className="d-flex align-items-center mr-3">
                                                <FaUser className="mr-2" />
                                                <p className="m-0">{devocional.author}</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <FaClock className="mr-2" />
                                                <p className="m-0 mr-2">Publicado</p>
                                                <Moment fromNow>{devocional.date}</Moment>
                                            </div>
                                        </div>
                                        <div className="text-dark my-2" dangerouslySetInnerHTML={{ __html: devocional.excerpt }}></div>
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

export default DevocionalesPage