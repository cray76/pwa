import gql from "graphql-tag";

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    // turn it on to execute: npm run build -a
    analyze: false
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],

  apollo: {
    clientConfigs: {
      default: '~/plugins/dato-cms-apollo-config.js'
    },
    allRoutes: gql`
      {
        allPosts {
          slug
        }
      }
    `
  },

  generate: {
    routes: [
      '/blog/first-post/', '/blog/second-post/'
    ]
  }

}
