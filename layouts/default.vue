<template>
  <div class="container-fluid p-0">
    <nav-bar />
    <content-section />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import ContentSection from '~/components/ContentSection.vue'
export default {
  components: {
    NavBar,
    ContentSection
  }
}
</script>
<style></style>
