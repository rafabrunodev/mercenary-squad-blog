/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Blog | Mercenary Squad`,
    description: `Contrate Freelancers, Consultores e Profissionais para seu projeto. Somos uma comunidade de desenvolvedores, consultores e criativos prontos para escalar seu time.`,
    siteUrl: `http://mercenarysquad.com/`,
    home: {
      title: `Blog`,
      description: `
        Contrate freelancers, consultores e times para desenvolver seus produtos com segurança e praticidade. Utilizando nossa comunidade nós vamos ajudar a acelerar o seu crescimento. Com a Mercenary Squad você tem ao seu alcance um hub de talentos, trabalhando no seu potencial máximo.
      `,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e609f7a2d23fCF_Domain_verify` 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-30027142-1",
        head: true,
      }
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
