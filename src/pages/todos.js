import React from "react"
import MetaTags from "../components/metaTags"
import { Link } from "gatsby"
import Moment from "react-moment"
import 'moment/locale/es';

// components
import HeaderNoBtn from "../components/HeaderNoBtn"
import useTodos from "../hooks/useTodos"
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

const TodosPages = () => {

    const allTodos = useTodos()

    // search function start
    const [todos, setTodos] = React.useState(allTodos);

    const handleBuscar = e => {
        const query = e.target.value

        const filtradoTodos = allTodos.filter(single => {
            const { title, excerpt } = single
            return (
                title.toLowerCase().includes(query.toLowerCase()) || excerpt.toLowerCase().includes(query.toLowerCase())
            )
        })

        setTodos(filtradoTodos)
    }
    // search function ends

    return (
        <>
            <MetaTags
                title="Fruto del Espíritu - Reflexiones y Estudios Bíblicos"
                description="Escritos sobre la biblia, refleiones y estudio bíblicos en un solo lugar para tu aprendizaje y crecimiento espiritual."
                keywords="Aprende biblia, aprende sobre la palabra de Dios gratis, biblia gratis, palabra de Dios gratis"
            />
            <MainLayout>
                <HeaderNoBtn
                    title="Devocionales y Estudios"
                    paragraph="Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí; y no queréis venir a mí para que tengáis vida. Gloria de los hombres no recibo."
                    reference="Juan 5.39-41"
                />

                <MailSignUp />
                <Container className="py-5">
                    <Row>
                        <Col sm={12} lg={8}>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h4 className="mx-auto">Todas las entradas</h4>
                                <Input type="text" aria-label="Buscar" onChange={handleBuscar} placeholder="Buscar Escritos" />
                            </div>
                            {todos.map(post => {
                                return <div
                                    key={post.id}
                                    className="d-flex flex-column border border-gray rounded p-2 my-3"
                                >
                                    <Link
                                        className="text-decoration-none"
                                        to={`/post/${post.title}`}
                                    >
                                        <div className="d-flex align-items-start flex-column">
                                            <p style={{
                                                fontSize: 12
                                            }}
                                                className="text-danger mb-0">{post.categories}
                                            </p>
                                            <h4>{post.title}</h4>
                                        </div>
                                        <div style={{ fontSize: 14 }} className="d-flex text-secondary">
                                            <div className="d-flex align-items-center mr-3">
                                                <FaUser className="mr-2" />
                                                <p className="m-0">{post.author}</p>
                                            </div>
                                            <div className="d-flex  align-items-center">
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
            </MainLayout>
        </>
    )
}

export default TodosPages