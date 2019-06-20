<template>
  <div class="container">
    <h1>Home</h1>
    <template v-if="user">
      <p>Hello {{ user.username }} :-)</p>
      <button type="button" class="btn btn-outline-primary" @click="onSignOut">Sign Out</button>
    </template>
    <template v-else>
      <nuxt-link to="signin" class="btn btn-outline-primary">Sign In</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const response = await $axios.get("/me")
    return {
      user: response.data.data.user,
    }
  },
  methods: {
    async onSignOut() {
      this.$auth.logout()
      const response = await this.$axios.get("/me")
      this.user = response.data.data.user
    },
  },
}
</script>
