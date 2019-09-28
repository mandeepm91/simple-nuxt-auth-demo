<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand to="/">NavBar</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="!isAuthenticated" to="/login">Login</b-nav-item>
      <b-nav-item v-if="!isAuthenticated" to="/register">Register</b-nav-item>
      <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
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
