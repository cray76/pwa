<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="container">
            <div class="tile is-ancestor is-vertical">
                <div class="tile is-child">
                    <div class="links">
                        <nuxt-link :to="'/'" :class="['button']">
                            BACK
                        </nuxt-link>
                    </div>
                </div>
                <nuxt-link :to="`/blog/${post.slug}`" v-for="(post, index) in posts" :key="index">
                    <div class="tile is-parent is-vertical">
                        <div class="tile is-child notification is-warning box">
                            {{post.title}}
                        </div>
                    </div>
                </nuxt-link>
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