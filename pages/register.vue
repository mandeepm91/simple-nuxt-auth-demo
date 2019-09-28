<template>
  <div class="row">
    <div class="mx-auto col-md-4 mt-5">
      <b-card>
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Register</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      name: ''
    }
  }
}
</script>

<style></style>
