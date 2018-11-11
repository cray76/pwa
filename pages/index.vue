<template>
  <section class="container">
    <div>

      <h1 class="title">
        NUXT PWA CORE
      </h1>
      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
      </div>
        {{ online ? 'online' : 'offline' }}

      <div class="links">
        <nuxt-link :to="'/blog'" class="button--grey">
            POSTS
        </nuxt-link>  
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
/* 

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.network {
  font-weight: 400;
  font-size: 1rem;
}

.network .circle {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: green;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.network.offline .circle {
  background: red;
}

*/
</style> 
