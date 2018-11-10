import gql from "graphql-tag";

module.exports = {

  build: {
    // npm run build -a
    analyze: false
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],

  // common headers are already provided by @nuxtjs/pwa preset
  head: {},  

  // progress-bar color
  loading: { color: '#3B8070' },
  
  // api manifest
  manifest: {
    theme_color: '#3B8070'
  },

  css: [
    '~/assets/main.css'
  ],

  router: {
    middleware: 'logs'
  },
  
  // auth and routes 
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

  // for static serverless deployment routes creation
  generate: {
    routes: function () {
      return ['/blog/first-post', '/blog/second-post'];
      // return module.exports.allRoutes.data.allPosts.map((post) => {
      //   return {
      //     route: '/blog/' + post.slug,
      //     payload: post
      //   }
      // })
    },
    subFolders: false
  }

}
