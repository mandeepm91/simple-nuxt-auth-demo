<template>
  <div class="row">
    <div class="mx-auto col-md-4 mt-5">
      <b-card>
        <b-form @submit="submitForm">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submitForm(evt) {
      evt.preventDefault()
      const credentials = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$auth.loginWith('local', {
          data: credentials
        })
        this.$router.push('/')
      } catch (e) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style></style>
