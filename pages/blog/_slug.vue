<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">

                        <div class="links">
                            <nuxt-link :to="'/blog'" :class="['button']">
                                BLOG
                            </nuxt-link>
                        </div>
                        <div class="card has-background-grey-light">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                            <img src="https://source.unsplash.com/random/128x128" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <h1 class="has-text-black is-size-2 is-4">{{post.title}}</h1>
                                        <h2 class="has-text-black is-size-6 is-6">{{post.slug}}</h2>
                                    </div>
                                </div>
                                <div class="content is-size-4 has-text-black">
                                    {{post.text}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
