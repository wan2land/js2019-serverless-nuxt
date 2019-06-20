<template>
  <div class="container">
    <h1>Sign In</h1>
    <nuxt-link to="/" class="btn btn-outline-primary">Home</nuxt-link>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Username" label-for="input-username">
        <b-form-input
          id="input-username"
          v-model="username"
          required
          autofocus
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign In</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await this.$axios.post("/signin", {
          username: this.username,
          password: this.password,
        })
        this.$auth.setUserToken(response.data.data.token)
        this.$router.push("/")
      } catch (e) {
        console.log(e)
        alert("로그인 실패")
      }
    }
  },
}
</script>
