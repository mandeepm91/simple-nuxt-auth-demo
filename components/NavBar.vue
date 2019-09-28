<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand to="/">NavBar</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/login">Login</b-nav-item>
      <b-nav-item to="/register">Register</b-nav-item>
      <b-nav-item @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout() {}
  }
}
</script>

<style></style>
