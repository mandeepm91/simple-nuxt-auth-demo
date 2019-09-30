export const getters = {
  loggedInUser(state) {
    return state.user
  }
}

export const actions = {
  async register(context, userDetails) {
    const response = await this.$axios.$post('/auth/register/', userDetails)
    return response
  }
}
