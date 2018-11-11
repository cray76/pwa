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
import { HTTP } from "./../../plugins/http-common";
export default {
  data() {
    return {
      post: { title: "", text: "Loading..." },
      slug: ""
    };
  },

  async asyncData({ params, error, payload }) {
    return { slug: params.slug ? params.slug : "" };
  },

  created() {
    HTTP.post("", {
      query:
        `query { post(filter:{slug: {eq: "` +
        this.slug +
        `"}}) { title text slug } }`
    }).then(res => {
      this.post = res.data.data.post;
      return this.post;
    });
  }
};
</script>

<style>
</style>
