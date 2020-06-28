import React from 'react'

// components
import MainLayout from "../layout/mainLayout"
import MetaTags from "../metaTags"
import Categories from "../categories"
import RecentPosts from "../recentPosts"
import MailSignUp from "../MailSignUp"
import HeaderPost from "../headerPosts"
import SocialShareComponent from "../socialShareComponent"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// discuss
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'


// styles
import { css } from "@emotion/core"


import { graphql } from "gatsby";

export const query = graphql`
    query ($title: String!) {
        wpgraphql {
            posts(where: {title: $title}) {
                nodes {
                    id
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
        site {
            siteMetadata {
              siteUrl
            }
          }
    }
`

const EntradaPlantilla = ({ data }) => {

    const entrada = data.wpgraphql.posts.nodes[0]

    let disqusConfig = {
        url: typeof window !== 'undefined' ? window.location.href : '',
        identifier: entrada.id,
        title: entrada.title,
    }

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
                            <div className="mt-5 border p-3">
                                <h4>Deja tu comentario y comparte</h4>
                                <CommentCount config={disqusConfig} placeholder="Comenta" />
                                <Disqus config={disqusConfig} />
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