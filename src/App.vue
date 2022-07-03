<template>
  <myHeader />
  <div class="d-flex justify-content-center">
    <router-view></router-view>
  </div>
  <!-- <addDocs />
  <watchDocs /> -->
</template>

<script>
import myHeader from "@/components/myHeader.vue";
// import addDocs from "@/pages/addDocs.vue";
// import watchDocs from "@/pages/watchDocs.vue";

export default {
  name: "App",
  components: {
    myHeader,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
