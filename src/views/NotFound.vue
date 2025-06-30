<script lang="ts">
const meta = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}
export default {
  name: 'NotFound',
  mounted() {
    document.title = meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description || '')
  },
  methods: {
    handleNavigation() {
      // This method can be used to handle any specific navigation logic
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div class="text-center p-10">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
