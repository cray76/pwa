import gql from "graphql-tag";
import axios from 'axios'

export default {

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
    errorHandler(error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    }
  },

  nuxtServerInit (store, context) {
    let client = context.app.apolloProvider.defaultClient
    console.log("client: " + client);
  },

  // for static serverless deployment routes creation
  generate: {
    routes: function (callback) {

      var allRoutes = ['/blog/first-post'];

      var postData = { "query": "query { allPosts { slug } }" };
      let axiosConfig = {
        headers: {
            "Authorization" : "94fb2ed33883640b8c75ba3b7ddf13",
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Access-Control-Allow-Origin": "*"
        }
      };
      axios.post('https://graphql.datocms.com', postData, axiosConfig)
      .then((result => {
        allRoutes = result.data.data.allPosts.map((post) => {
          return {
            route: '/blog/' + post.slug,
            payload: post
          }
        })
      }))
      .catch(error => console.error(error));

      return allRoutes;
    },
    subFolders: false
  }
}
