export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

export const actions = {
  async register(context, userDetails) {
    const response = await this.$axios.$post('/auth/register/', userDetails)
    return response
  }
}
