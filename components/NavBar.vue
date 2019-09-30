<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand to="/">NavBar</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="!loggedIn" to="/login">Login</b-nav-item>
      <b-nav-item v-if="!loggedIn" to="/register">Register</b-nav-item>
      <b-nav-item v-if="loggedIn" @click="logout">
        <em>Hello {{ user.name }}</em>
      </b-nav-item>
      <b-nav-item v-if="loggedIn" @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
