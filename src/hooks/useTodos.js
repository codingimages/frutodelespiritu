import { graphql, useStaticQuery } from "gatsby"

const useTodos = () => {

  const data = useStaticQuery(graphql`
    {
        wpgraphql {
          posts(first: 200){
            nodes {
              id
              slug
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
              excerpt(format: RENDERED)
            }
          }
        }
      }
    `)

  return data.wpgraphql.posts.nodes.map(todos => ({
    id: todos.id,
    slug: todos.slug,
    author: todos.author.name,
    date: todos.date,
    categories: todos.categories.nodes[0].slug,
    title: todos.title,
    excerpt: todos.excerpt
  }))
}

export default useTodos