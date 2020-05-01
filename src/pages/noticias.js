// import React from "react"
// import MetaTags from "../components/metaTags"
// import { FaUser, FaClock } from "react-icons/fa"
// import Moment from "react-moment"
// import 'moment/locale/es';

// // Layout
// import MainLayout from "../layouts/mainLayout"

// // bootstrap components
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import Spinner from "../components/spinner/Spinner"

// // Components
// import HeaderNoBtn from "../components/HeaderNoBtn"
// import MailSignUp from "../components/MailSignUp"
// import Categories from "../components/categories"
// import RecentPosts from "../components/recentPosts"


// // styles
// import styled from "@emotion/styled"

// const Input = styled.input`
//     height: calc(1.5em + .75rem + 1.5px);
//     padding: .375rem .75rem;
//     border: 1px solid #ced4da;
//     border-radius: .25rem;
//     color: #000;

//     :focus {
//         border-color: #4d016b;
//         outline: 0;
//         box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
//     }
// `

// class NoticiasPage extends React.Component {
//     state = {
//         loading: true,
//         error: false,
//         fetchData: [],
//         articles: []
//     }

//     componentDidMount() {
//         fetch('https://newsapi.org/v2/everything?qInTitle=cristianos&language=es&apiKey=bc9471b0c90c4d1a8d41860292e59d6b')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 this.setState({
//                     loading: false,
//                     fetchData: data.articles,
//                     articles: data.articles,
//                 })
//             });
//     }

//     handleSearch(e) {
//         const query = e.target.value
//         const filteredArticles = this.state.fetchData.filter(article => {
//             const { title, description } = article
//             return (
//                 title.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase())
//             )
//         })
//         this.setState({ articles: filteredArticles })
//     }

//     render() {
//         const articles = this.state.articles
//         console.log(articles)
//         return (
//             <>
//                 <MetaTags title="Fruto del Espíritu - Noticias cristianas" />
//                 <MainLayout>
//                     <HeaderNoBtn
//                         title="Noticias Cristianas"
//                         paragraph="El hombre de bien tiene misericordia, y presta; Gobierna sus asuntos con juicio, Por lo cual no resbalará jamás; En memoria eterna será el justo. No tendrá temor de malas noticias; Su corazón está firme, confiado en Jehová."
//                         reference="Salmo 112 5-7"
//                         btnref="/devocionales"
//                         btntxt="Devocionales"
//                     />
//                     <MailSignUp />
//                     <Container className="py-5">
//                         <Row>

//                             {/* Content */}
//                             <Col sm={12} lg={8}>
//                                 <div className="d-flex align-items-center justify-content-between flex-wrap">
//                                     <h2>Noticias Recientes</h2>
//                                     <Input type="text" aria-label="Buscar" onChange={this.handleSearch.bind(this)} placeholder="Buscar Noticias" />
//                                 </div>
//                                 {this.state.loading ? <Spinner></Spinner> :

//                                     articles.map(article => {
//                                         return <div
//                                             key={article.url}
//                                             className="d-flex flex-column border border-gray rounded p-2 my-3"
//                                         >
//                                             <a
//                                                 className="text-decoration-none"
//                                                 href={article.url}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 to={article.url}>
//                                                 <h3>{article.title}</h3>
//                                                 <div className="d-flex text-dark">
//                                                     <div className="post-info d-flex align-items-center mr-3">
//                                                         <FaUser className="mr-2" />
//                                                         <p className="m-0">{article.author}</p>
//                                                     </div>
//                                                     <div className="d-flex align-items-center">
//                                                         <FaClock className="mr-2" />
//                                                         <p className="m-0">Publicado</p>
//                                                         <Moment fromNow>{article.publishedAt}</Moment>
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-dark my-2" dangerouslySetInnerHTML={{ __html: article.description }}></div>
//                                             </a>
//                                         </div>
//                                     })}

//                             </Col>
//                             <Col xs={12} lg={4}>
//                                 <Categories />
//                                 <RecentPosts />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </MainLayout>
//             </>
//         )
//     }
// }

// export default NoticiasPage