<template>    
  <section class="container">
    <div>
      <nuxt-link :to="'/blog'" class="button--grey">
            POSTS
      </nuxt-link>
      <div class="button--green">
        <b> {{post.title}} </b>         
        <p>
            {{post.text}}
        </p>
      </div>  
    </div>    
  </section>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    post: {
      query: gql`
        query Post($slug: String!) {
          post(filter: { slug: { eq: $slug } }) {
            title
            text
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.slug
        };
      },
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
