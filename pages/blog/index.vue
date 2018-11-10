<template>
  <section class="container">
    <div>
      <ul>
        <li
          v-for="(post, index) in allPosts"
          :key="index"
        >
          <h2 class="subtitle">
            <nuxt-link :to="`/blog/${post.slug}`">
              {{ post.title }}
            </nuxt-link>  
          </h2>
          <p>{{post.text}}</p>  
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts {
          title
          text
          slug
        }
      }
    `
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
</style>
