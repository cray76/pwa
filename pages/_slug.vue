<template>
    <div>
         <h1 class="title">
             {{post.title}}
         </h1>
        <p>
            {{post.text}}
        </p>
    </div>    
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
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
