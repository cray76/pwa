<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div>
                            <div class="column">
                                <h1 class="title">                                    
                                    <span class="has-text-black-bis">CRAY<b>76</b></span><span class="has-text-white-bis">PWA</span>
                                </h1>
                                <div :class="['network',online ? 'online' : 'offline']">
                                    <div class="circle"></div>
                                </div>
                                {{ online ? 'online' : 'offline' }}

                                <div class="links">
                                    <nuxt-link :to="'/blog'" :class="['button']">
                                        BLOG
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // import CustomComponent from "~/components/YourCustomComponent.vue";

    export default {
        // customComponent: { CustomComponent },

        data() {
            return {
                online: true
            };
        },

        mounted() {
            if (!window.navigator) {
                this.online = false;
                return;
            }
            this.online = Boolean(window.navigator.onLine);
            window.addEventListener("offline", this._toggleNetworkStatus);
            window.addEventListener("online", this._toggleNetworkStatus);
        },

        methods: {
            _toggleNetworkStatus({ type }) {
                this.online = type === "online";
            }
        },

        destroyed() {
            window.removeEventListener("offline", this._toggleNetworkStatus);
            window.removeEventListener("online", this._toggleNetworkStatus);
        }
    };
</script>

<style>
</style>
