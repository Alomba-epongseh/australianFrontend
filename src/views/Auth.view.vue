<template>
  <div class="md:mt-0">
    <NavbarView />
    <router-view />
  </div>
</template>
<script>
import NavbarView from "./Website/NavbarView.vue";
export default {
  name: "AuthView",
  components: { NavbarView },
};
</script>
