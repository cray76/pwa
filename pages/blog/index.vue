<template>
  <section class="container">
    <div>
        <nuxt-link :to="'/'" class="button--grey">
            BACK
        </nuxt-link>  
      <ul>
        <li
          v-for="(post, index) in allPosts"
          :key="index"
        >
            <nuxt-link :to="`/blog/${post.slug}`" class="button--green">
              {{ post.title }}
            </nuxt-link>  
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

ul {
  list-style-type: none;
}
</style>
