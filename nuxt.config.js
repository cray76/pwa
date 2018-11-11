import { HTTP } from "./plugins/http-common";
export default {

  build: {
    // npm run build -a
    analyze: true
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/bulma'    
  ],

  // common headers are already provided by @nuxtjs/pwa preset
  head: {},

  // progress-bar color
  loading: { color: '#3B8070' },

  // api manifest
  manifest: {
    theme_color: '#3B8070'
  },

  // css
  css: [
    '~/assets/main.css'
  ],

  // assign middleware to router
  router: {
    middleware: 'check'
  },

  // for static serverless deployment routes creation
  generate: {
    routes: function () {

      return HTTP.post("", { "query": "query { allPosts { slug } }" })
        .then(res => {
          return res.data.data.allPosts.map(post => {
            return {
              route: '/blog/' + post.slug
            }
          })
        })

    },
    subFolders: false
  }
}
