import { graphql, useStaticQuery } from "gatsby"

const useEstudios = () => {

  const data = useStaticQuery(graphql`
    {
        wpgraphql {
          posts(where: {categoryId: 3}, first: 200){
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

  return data.wpgraphql.posts.nodes.map(devocional => ({
    id: devocional.id,
    slug: devocional.slug,
    author: devocional.author.name,
    date: devocional.date,
    categories: devocional.categories.nodes[0].slug,
    title: devocional.title,
    excerpt: devocional.excerpt
  }))
}

export default useEstudios