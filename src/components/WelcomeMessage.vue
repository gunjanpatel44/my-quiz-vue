<script setup lang="ts">
defineProps({
  username: String,
  count: Number,
})
</script>

<template>
  <p>Welcome {{ username }}</p>
</template>
