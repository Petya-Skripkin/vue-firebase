<template>
  <div v-if="cards === null" class="spinner-border" role="status"></div>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/add-card')
  }
};
</script>

<style>
</style>