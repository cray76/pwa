<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="container">
            <div class="tile is-ancestor is-vertical">

                <div class="tile is-child">
                    <div class="links">
                        <nuxt-link :to="'/blog'" :class="['button']">
                            BLOG
                        </nuxt-link>
                    </div>
                </div>

                <div class="tile is-child notification is-warning">

                    <span class="is-48x48 centered">
                        <img src="https://source.unsplash.com/random/96x96" alt="Card image">
                    </span>

                    <span class="centered has-text-dark is-size-4">
                        {{post.title}}
                    </span>
                </div>

                <div class="tile is-child notification has-background-grey-dark">
                    {{post.text}}
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