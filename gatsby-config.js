module.exports = {
  siteMetadata: {
    title: `ORTHOPEDIC AND SPINE SURGEON`,
    description: `Nepal orthopedic hospital, orthopedic, spine, surgeon, vayodha hospital, orthopedic doctor in vayodha hospital, orthopedic doctor in nepal, orthopedic doctor in kathmandu, Ms. orthopedic and spine surgeon, dr abhay yadav`,
    author: `@Brham`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Dr. Abhay Yadav | MS. ORTHOPEDIC AND SPINE SURGEON `,
        short_name: `ORTHOPEDIC AND SPINE SURGEON`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: ` `, // This path is relative to the root of the site.
      },
    },
   
  ],
}

