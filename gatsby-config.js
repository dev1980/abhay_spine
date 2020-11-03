module.exports = {
  siteMetadata: {
    title: `Dr. Abhay Yadav, orthopedic and spine surgeon`,
    titleTemplate: "%s | orthopedic and spine surgeon",
    description: `Dr. Abhay Yadav Best Orthopedic and Spine Surgeon in Kathmandu at vayodha hospital & Nepal Korea Friendship Municipality Hospital (NKFMH) at Bhaktapur Thimi, Nepal, Best Orthopedic Surgeon in Kathmandu, Best Spine Surgeon in Kathmandu,  orthopedic specialties such as sports medicine, trauma, joint replacement, pediatrics, spine, shoulder and elbow, foot and ankle and hand.`,
    twitterUsername: "@drabhay",
    url: "https://www.abhayspine.com", // No trailing slash allowed!
    image: "/images/abhay.png", // Path to your image you placed in the 'static' folder
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

