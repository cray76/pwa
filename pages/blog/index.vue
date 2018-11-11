<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div>
                            <div class="column">

                                <div class="links">
                                    <nuxt-link :to="'/'" :class="['button']">
                                        HOME
                                    </nuxt-link>
                                </div>

                                <ul>
                                    <li v-for="(post, index) in posts" :key="index" class="subtitle">

                                        <div class="card has-background-grey-light">
                                            <div class="card-content">
                                                <div class="media">
                                                    <div class="media-left">

                                                    </div>
                                                    <nuxt-link :to="`/blog/${post.slug}`">
                                                        <div class="media-content">
                                                            <p class="title is-4">{{post.title}}</p>
                                                            <p class="subtitle is-6">{{post.slug}}</p>
                                                        </div>                                                        
                                                    </nuxt-link>
                                                </div>

                                            </div>
                                        </div>

                                    </li>
                                </ul>

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
