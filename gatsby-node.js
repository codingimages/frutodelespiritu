exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
        wpgraphql {
          posts(first: 200) {
            nodes {
              title
            }
          }
        }
      }
    `);

  console.log(resultado.data.wpgraphql.posts.nodes)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors);
  }

  // si hay paginas crear los archivos
  const entradas = resultado.data.wpgraphql.posts.nodes;

  entradas.forEach(entrada => {

    actions.createPage({
      path: entrada.title,
      component: require.resolve("./src/components/template/PlantillaEntrada.js"),
      context: {
        title: entrada.title,
      },
    })
  })
}