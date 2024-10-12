<template>
  <ScreenLoader
    v-if="getLoaderState.type === 'spinner' && getLoaderState.isActive"
  />
  <ToastReusable />
  <Modal />
  <router-view />
</template>
<script>
import { ScreenLoader, Modal, ToastReusable } from "@/components";
export default {
  components: {
    ScreenLoader,
    ToastReusable,
    Modal,
  },
  computed: {
    getLoaderState() {
      return this.$store.getters.getLoaderState;
    },
    getToastState() {
      return this.$store.getters.getToastState;
    },
  },
};
</script>
