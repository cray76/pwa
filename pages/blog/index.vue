<template>
  <section class="container">
    <div>
        <nuxt-link :to="'/'" class="button--grey">
            BACK
        </nuxt-link>  
      <ul>
        <li
          v-for="(post, index) in posts"
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
import { HTTP } from "./../../plugins/http-common";
export default {

  data() {
    return {
      posts: []
    };
  },

  created() {
    HTTP.post("", { query: "query { allPosts { title text slug } }" }).then(
      res => {
        this.posts = res.data.data.allPosts;
      }
    );
  }
};
</script>

<style>
</style>
