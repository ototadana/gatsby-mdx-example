module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/posts`,
        name: `posts`
      }
    },
  ],
}
