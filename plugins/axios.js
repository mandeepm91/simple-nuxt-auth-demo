export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.withCredentials = true
    return config
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 403) {
      redirect('/login')
    }
  })
}
