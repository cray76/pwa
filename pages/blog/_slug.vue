<template>    
  <section class="container">
    <nuxt-link :to="'/blog'" class="button--grey">
      POSTS
    </nuxt-link>
    <div class="button--green">
      <b> {{post.title}} </b>         
      <p>
        {{post.text}}
      </p>
    </div>  
  </section>
</template>

<script>
import { HTTP } from "../../plugins/http-common";
export default {
  async asyncData({ params, error, payload }) {
    return { post: payload ? payload : { title: "", text: "Loading..." } };
  },

  created() {
    HTTP.post("", { query: "query { post { title text slug } }" }).then(res => {
      this.post = res.data.data.post;
      return this.post;
    });
  }
};
</script>

<style>
</style>
