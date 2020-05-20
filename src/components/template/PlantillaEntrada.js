import React from 'react'

// components
import MainLayout from "../layout/MainLayout"
import MetaTags from "../MetaTags"
import Categories from "../Categories"
import RecentPosts from "../RecentPosts"
import MailSignUp from "../MailSignUp"
import HeaderPost from "../HeaderPosts"
import SocialShareComponent from "../SocialShareComponent"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


// styles
import { css } from "@emotion/core"


import { graphql } from "gatsby";

export const query = graphql`
    query ($title: String!) {
        wpgraphql {
            posts(where: {title: $title}) {
                nodes {
                    author {
                        name
                    }
                    date
                    categories {
                        nodes {
                            slug
                        }
                    }
                    title
                    excerpt
                    content(format: RENDERED)
                }
            }
        }
    }
`

const EntradaPlantilla = ({ data }) => {
    const entrada = data.wpgraphql.posts.nodes[0]
    return (
        <>
            <MetaTags title={`${entrada.title} / Fruto del Espíritu - Devocionales, Estudios Bíblicos y Más`} />
            <MainLayout>
                <HeaderPost
                    title={entrada.title}
                    paragraph={entrada.excerpt}
                />
                <Container className="py-5">
                    {/* Content */}
                    <Row>
                        <Col sm={12} lg={8}>
                            <div
                                css={css`
                                    p{
                                        margin-bottom: 1rem;
                                        line-height: 2;
                                    }

                                    ol li{
                                        margin: 0 0 1rem 2rem;
                                    }
                                `}
                                dangerouslySetInnerHTML={{ __html: entrada.content }}>
                            </div>
                            <SocialShareComponent />
                        </Col>

                        <Col sm={12} lg={4}>
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

export default EntradaPlantilla