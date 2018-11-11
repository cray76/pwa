<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="container">
            <div class="tile is-ancestor is-vertical">

                <div class="tile is-child is-2">
                    <div class="links">
                        <nuxt-link :to="'/blog'" :class="['button']">
                            BLOG
                        </nuxt-link>
                    </div>
                </div>

                <div class="tile is-parent is-horizontal">
                    <div class="tile is-child notification is-info is-4">
                        <figure class="image is-48x48">
                            <img src="https://source.unsplash.com/random/96x96" alt="Card image">
                        </figure>
                    </div>
                    <div class="tile is-child notification is-warning has-text-dark is-8">
                        <h1 class="is-size-4">{{post.title}}</h1>
                    </div>
                </div>

                <div class="tile is-parent">
                    <div class="tile is-child notification has-background-grey-dark">
                        {{post.text}}
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