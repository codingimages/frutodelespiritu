import { graphql, useStaticQuery } from "gatsby"

const useRecentPosts = () => {

  const data = useStaticQuery(graphql`
    {
        wpgraphql {
          posts(first: 5){
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

  return data.wpgraphql.posts.nodes.map(post => ({
    id: post.id,
    slug: post.slug,
    author: post.author.name,
    date: post.date,
    categories: post.categories.nodes[0].slug,
    title: post.title,
    excerpt: post.excerpt
  }))
}

export default useRecentPosts