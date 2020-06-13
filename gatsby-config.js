const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Fruto del Espíritu`,
    description: `Fruto del Espíritu es un ministerio en línea cuya misión es enseñar la palabra de Dios, ayudarte a entenderla y ejercitar la fe que le agrada a Dios.`,
    author: `Reynaldo Navedo`,
    siteUrl: `https://frutodelespiritu.website/`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#007BFF`,
        theme_color: `#007BFF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://frutodelespiritu.us10.list-manage.com/subscribe/post?u=880da2e1d210b0ffbeb0183c2&amp;id=377c460b69`
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://admin.frutodelespiritu.website/graphql`
      }
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/" }],
        height: 3,
        prependToBody: false,
        color: `#007BFF`
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: {
                site, wpgraphql
              } }) => {
              return wpgraphql.posts.nodes.map(edge => {
                return Object.assign({}, edge, {
                  description: edge.excerpt,
                  date: edge.date,
                  url: site.siteMetadata.siteUrl + "/" + edge.title,
                })
              })
            },
            query: `
            {
              wpgraphql {
                posts(first: 200){
                  nodes {
                    excerpt
                    slug
                    date
                    title
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Fruto de Espíritu RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/todos/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-145416718-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-frutodelespiritu-com`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
